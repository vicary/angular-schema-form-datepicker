angular.module('schemaForm').config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider', 'sfBuilderProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider, sfBuilderProvider) {

    var datepicker = function(name, schema, options) {
      if (schema.type === 'string' && (schema.format === 'date' || schema.format === 'date-time')) {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'datepicker';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(datepicker);

    //Add to the bootstrap directive
    schemaFormDecoratorsProvider.defineAddOn(
      'bootstrapDecorator',
      'datepicker',
      'directives/decorators/bootstrap/datepicker/datepicker.html',
      sfBuilderProvider.stdBuilders
    );
  }
]);
