function getCookie( cookieNameRegExp ) {
  var returnValue = new Array;

  cookies = {};
  var pair, name, value, separated = document.cookie.split( ';' );
  for( var i = 0; i < separated.length; i = i + 1 ) {
    pair = separated[i].split( '=' );
    name = pair[0].replace( /^\s*/, '' ).replace( /\s*$/, '' );
    value = decodeURIComponent( unescape( pair[1] ) );
    cookies[name] = value;
  }

  if( typeof cookieNameRegExp === 'string' ) {
    cookieNameRegExp = new RegExp( cookieNameRegExp );
  }
  
  i = 0;
  for( var cookieName in cookies ) {
    if( cookieName.match( cookieNameRegExp ) ) {
      returnValue[i++] = cookies[cookieName];
    }
  }
  return returnValue;
}

function deleteCookie( name, path, domain ) {
  document.cookie = name + "=" + ( ( path ) ? "; path=" + path : "") + "; expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

function setCookie( name, value, expires, path, domain, secure ) {
  var today = new Date();
  today.setTime( today.getTime() );
  if ( expires ) {
    expires = expires * 1000 * 60 * 60 * 24;
  }
  var expires_date = new Date( today.getTime() + (expires) );
  document.cookie = name + "=" +escape( value ) +
    ( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) +
    ( ( path ) ? ";path=" + path : "" ) +
    ( ( domain ) ? ";domain=" + domain : "" ) +
    ( ( secure ) ? ";secure" : "" );
}