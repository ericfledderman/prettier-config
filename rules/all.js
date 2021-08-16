// 0 = off
// 1 = warn
// 2 = error

// https://prettier.io/docs/en/options.html
module.exports = {
  rules : {
    arrowParens               : 'avoid',
    bracketSpacing            : true,
    embeddedLanguageFormat    : 'auto',
    endOfLine                 : 'lf',
    // filePath                  : null,
    htmlWhitespaceSensitivity : 'css',
    insertPragma              : false,
    jsxBrackets               : false,
    jsxSingleQuote            : true,
    // parser                    : null,
    proseWrap                 : 'never',
    quoteProps                : 'as-needed',
    // rangeEnd                  : 'infinity',
    // rangeStart                : 0,
    requirePragma             : false,
    semi                      : false,
    singleQuote               : true,
    tabWidth                  : 2,
    tailingComma              : 'none',
    useTabs                   : false,
    vueIndentScriptAndStyle   : true
  }
}
