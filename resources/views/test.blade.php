<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="" type="image/gif">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/mobile.css">
</head>
<body>

<div class="page-wrapper">
    <div class="page-wrapper__header-and-content">
        <div class="personal-area">
            <div class="personal-area__container">
                <form id="filter">
                    <fieldset>
                        <legend>Filter by category</legend>
                        <label><input type="radio" name="category" value="category1" checked="checked">Cat1</label>
                        <label><input type="radio" name="category" value="category2">Cat2</label>
                    </fieldset>
                    <fieldset>
                        <legend>Filter by type</legend>
                        <label><input type="radio" name="type" data-category="cat1" value="all" checked="checked">Everything</label>
                        <label><input type="radio" name="type" data-category="cat2" value="app">Applications</label>
                        <label><input type="radio" name="type" data-category="cat2" value="util">Utilities</label>
                    </fieldset>
                    <fieldset>
                        <legend>Sort by</legend>
                        <label><input type="radio" name="sort" value="size" checked="checked">Size</label>
                        <label><input type="radio" name="sort" value="name">Name</label>
                    </fieldset>
                </form>

                <ul id="applications" class="squares">
                    <li class="squares__item" data-id="id-1" data-type="util">
                        <img src="https://razorjack.net/quicksand/images/activity-monitor.png" width="128" height="128" alt="" />
                        <strong>Activity Monitor</strong>
                        <span data-type="size">348 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-2" data-type="app">
                        <img src="https://razorjack.net/quicksand/images/address-book.png" width="128" height="128" alt="" />
                        <strong>Address Book</strong>
                        <span data-type="size">1904 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-3" data-type="app">
                        <img src="https://razorjack.net/quicksand/images/finder.png" width="128" height="128" alt="" />
                        <strong>Finder</strong>
                        <span data-type="size">1337 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-4" data-type="app">
                        <img src="https://razorjack.net/quicksand/images/front-row.png" width="128" height="128" alt="" />
                        <strong>Front Row</strong>
                        <span data-type="size">401 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-5" data-type="app">
                        <img src="https://razorjack.net/quicksand/images/google-pokemon.png" width="128" height="128" alt="" />
                        <strong>Google Pokémon</strong>
                        <span data-type="size">12875 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-6" data-type="app">
                        <img src="https://razorjack.net/quicksand/images/ical.png" width="128" height="128" alt="" />
                        <strong>iCal</strong>
                        <span data-type="size">5273 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-7" data-type="app">
                        <img src="https://razorjack.net/quicksand/images/ichat.png" width="128" height="128" alt="" />
                        <strong>iChat</strong>
                        <span data-type="size">5437 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-8" data-type="app">
                        <img src="https://razorjack.net/quicksand/images/interface-builder.png" width="128" height="128" alt="" />
                        <strong>Interface Builder</strong>
                        <span data-type="size">2764 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-9" data-type="app">
                        <img src="https://razorjack.net/quicksand/images/ituna.png" width="128" height="128" alt="" />
                        <strong>iTuna</strong>
                        <span data-type="size">17612 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-10" data-type="util">
                        <img src="https://razorjack.net/quicksand/images/keychain-access.png" width="128" height="128" alt="" />
                        <strong>Keychain Access</strong>
                        <span data-type="size">972 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-11" data-type="util">
                        <img src="https://razorjack.net/quicksand/images/network-utility.png" width="128" height="128" alt="" />
                        <strong>Network Utility</strong>
                        <span data-type="size">245 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-12" data-type="util">
                        <img src="https://razorjack.net/quicksand/images/sync.png" width="128" height="128" alt="" />
                        <strong>Sync</strong>
                        <span data-type="size">3788 KB</span>
                    </li>
                    <li class="squares__item" data-id="id-13" data-type="app">
                        <img src="https://razorjack.net/quicksand/images/textedit.png" width="128" height="128" alt="" />
                        <strong>TextEdit</strong>
                        <span data-type="size">1669 KB</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>




<script src="/test_js/test.jquery.js"></script>
<script src="/test_js/jquery.quicksand.js"></script>
<script src="/test_js/test.js"></script>


</body>
</html>