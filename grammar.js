module.exports = grammar({
    name: 'qmet',

    conflicts: $ => [
        [$.component_group],
    ],

    rules: {
        source_file: $ => $.expression,

        expression: $ => $.component_group,

        component_group: $ => seq(
            $.component_unit,
            repeat(seq('+', $.component_unit))
        ),

        component_unit: $ => seq(
            optional(seq(field('repeat', $.number), '*')),
            field('name', $.identifier),
            optional(seq('>', $.component_group))
        ),

        number: $ => /\d+/,
        identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,
    }
});
