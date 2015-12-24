<!DOCTYPE html>
  <!--[if lt IE 9 ]><html lang="en-NZ" class="lt-ie9"><![endif]-->
  <!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html lang="en-NZ"><!--<![endif]-->
  <head>
    <title>{%=o.htmlWebpackPlugin.options.title%}</title>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Icons -->
    <link rel="apple-touch-icon" sizes="57x57" href="./images/favicon/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./images/favicon/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./images/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./images/favicon/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./images/favicon/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./images/favicon/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./images/favicon/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./images/favicon/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./images/favicon/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="./images/favicon/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="./images/favicon/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="./images/favicon/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="./images/favicon/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="./images/favicon/manifest.json">
    <link rel="mask-icon" href="./images/favicon/safari-pinned-tab.svg" color="#59b430">
    <link rel="shortcut icon" href="./images/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="./images/favicon/mstile-144x144.png">
    <meta name="msapplication-config" content="./images/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

    {% for (var css in o.htmlWebpackPlugin.files.css) { %}
    <link href="{%=o.htmlWebpackPlugin.files.css[css] %}" rel="stylesheet">
    {% } %}

    <!--[if lte IE 8]>
    <link rel="stylesheet" href="./css/browser/ie8.css" media="all" />
    <script src="./ie8/respond.min.js"></script>
    <![endif]-->
    <!--[if IE 9]>
    <link rel="stylesheet" href="./css/browser/ie9.css" media="all" />
    <![endif]-->
    <!-- Scripts -->

    <!-- Hide Unsuported Browser or JavaScript disabled message before checking -->
    <style type="text/css">
        .hidden {display:none;}
    </style>
    <script type="text/javascript">
      // $('html').addClass('hidden');
      // $(document).ready(function() {
      // $('html').show();  // EDIT: Can also use $('html').removeClass('hidden');
      // });
     </script>
     <!-- Hide Unsuported Browser or JavaScript disabled message before checking -->
  </head>
  <body data-application-id='1371' data-member-id=''>
    <div id='noscript'>
      <div class="message" id="javascript-disabled">
        <div class="page-wrapper">
          <h2 class="title">Warning! JavaScript required.</h2>
          <p>To use this website you need to have JavaScript enabled. Without these features parts of the site may not function correctly.</p>
        </div>
      </div>
    </div>
    <script>document.getElementById('noscript').style.display='none';</script>
    <!--[if lte IE 8]>
      <div class="message" id="unsupported-browser">
        <noscript>
          <div class="page-wrapper">
            <h2 class="title">Warning! Unsupported browser.</h2>
            <p>We have detected that you are using an unsupported browser, we cannot guarantee that this website will look and function as intended on your browser. <a href="https://www.google.com/search?q=web+browser">Upgrade your browser now</a>.</p>
          </div>
        </noscript>
      </div>
    <![endif]-->

    <div id="app"></div>
    {% for (var chunk in o.htmlWebpackPlugin.files.chunks) { %}
      <script src="{%=o.htmlWebpackPlugin.files.chunks[chunk].entry %}"></script>
    {% } %}
  </body>
</html>