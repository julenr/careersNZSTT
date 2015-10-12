<!DOCTYPE html>
<html{% if(o.htmlWebpackPlugin.files.manifest) { %}
  manifest="{%= o.htmlWebpackPlugin.files.manifest %}"{% } %}>
  <head>
    <meta charset="UTF-8">
    <title>{%=o.htmlWebpackPlugin.options.title%}</title>
    {% if (o.htmlWebpackPlugin.files.favicon) { %}
    <link rel="shortcut icon" href="{%=o.htmlWebpackPlugin.files.favicon%}">
    {% } %}
    {% for (var css in o.htmlWebpackPlugin.files.css) { %}
    <link href="{%=o.htmlWebpackPlugin.files.css[css] %}" rel="stylesheet">
    {% } %}
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
  <body>
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