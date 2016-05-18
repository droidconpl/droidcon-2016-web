exports.config =
  # See http://brunch.readthedocs.org/en/latest/config.html for documentation.
  server:
    port: 2222

  plugins:
    autoReload:
      delay: 500
      forceRepaint: true
    static_jade:
      extension: ".static.jade"

  modules:
    wrapper: false
    definition: false

  files:
    javascripts:
      defaultExtension: 'js'
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/
      order:
        before: [
          'vendor/scripts/jquery-2.1.4.min.js'
          # Twitter Bootstrap jquery plugins
          'vendor/scripts/bootstrap/transition.js',
          'vendor/scripts/bootstrap/affix.js',
          'vendor/scripts/bootstrap/alert.js',
          'vendor/scripts/bootstrap/button.js',
          'vendor/scripts/bootstrap/carousel.js',
          'vendor/scripts/bootstrap/collapse.js',
          'vendor/scripts/bootstrap/dropdown.js',
          'vendor/scripts/bootstrap/modal.js',
          'vendor/scripts/bootstrap/scrollspy.js',
          'vendor/scripts/bootstrap/tab.js',
          'vendor/scripts/bootstrap/tooltip.js',
          'vendor/scripts/bootstrap/popover.js',
          'vendor/scripts/bootstrap/typeahead.js'
        ]

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^(app|vendor)/
      order:
        before: ['vendor/styles/bootstrap/bootstrap.less']
        after: []

    # Ensure that our jade templates don't get compiled into our app JS.
    templates:
      joinTo: 'javascripts/template.js'
