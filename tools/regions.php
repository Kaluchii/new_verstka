<?php 
error_reporting(E_ALL);
//ini_set('display_errors',1);

$params = array(
    "path" => "../"
);

require_once($params['path'].DIRECTORY_SEPARATOR."Core.class.php");
$Core = new Core($params);
unset($params);
$DB = new \classes\MySQLi($Core);
$Curl = new \classes\CURLSocket($Core);



$Curl->SetOpt(CURLOPT_HTTPHEADER, array('Content-Type: application/json;charset=utf-8'));
$Curl->SetOpt(CURLOPT_POST, true);


/*$Curl->Exec("https://kredit24.kz/secure/rest/addresses/districtTowns?parentId=3");
    $result = $Curl->result['content'];

//    $result = mb_convert_encoding($result, "ISO-8859-5", "UTF-8");
    $result = json_decode($result);
//    $result = json_encode($result);
var_dump($result[0]); die;*/

for ($i=10; $i<17;$i++){
    $Curl->Exec("https://kredit24.kz/secure/rest/addresses/districtTowns?parentId=".$i);
    $areas = $Curl->result['content'];
    $areas = json_decode($areas);
    echo "<b>REGION ID ".$i."</b><br>";
    
    foreach($areas as $k => $v){
        echo "AREA ".$v->id." --- ".mb_convert_encoding($v->value, "ISO-8859-5", "UTF-8")." ---- <br>";
        
        $Curl->Exec("https://kredit24.kz/secure/rest/addresses/cityVillages?parentId=".$v->id);
        $cities = $Curl->result['content'];
        $cities = json_decode($cities);
        
//        var_dump($cities);die;
        
        $zip_code = ($v->zipCode ? $v->zipCode : "");
        
        $DB->Query("INSERT INTO `places_areas` SET 
                        `name` = '".$DB->S($v->value)."',
                        `region_id` = ".intval($i).",
                        `zip_code` = '".$DB->S($zip_code)."',
                        `child_count` = '".$DB->S(count($cities))."'
                        ");
        $area_id = $DB->insert_id();
        
        foreach($cities as $k2 => $v2){
            echo "------------".$v2->id." --- ".mb_convert_encoding($v2->value, "ISO-8859-5", "UTF-8")."<br>";
            
            $zip_code2 = ($v2->zipCode ? $v2->zipCode : "");
            
            $DB->Query("INSERT INTO `places_cities` SET 
                        `name` = '".$DB->S($v2->value)."',
                        `area_id` = ".intval($area_id).",
                        `zip_code` = '".$DB->S($zip_code2)."'
                        ");
        }
//        sleep(2);
    }
    echo "<br><br>";
    
    
    
}

echo "all done";
        
?>