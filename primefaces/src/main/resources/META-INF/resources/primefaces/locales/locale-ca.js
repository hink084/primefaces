/** Catalan */
PrimeFaces.locales["ca"] = {
  startsWith: "Comença per",
  contains: "Conté",
  notContains: "No conté",
  endsWith: "Acaba amb",
  equals: "Igual a",
  notEquals: "Diferent a",
  noFilter: "Sense filtre",
  lt: "Menor que",
  lte: "Menor o igual a",
  gt: "Major que",
  gte: "Major o igual a",
  dateIs: "Data igual a",
  dateIsNot: "Data diferent a",
  dateBefore: "Data abans de",
  dateAfter: "Data després de",
  custom: "Personalitzar",
  clear: "Netejar",
  apply: "Aplicar",
  matchAll: "Coincidir tot",
  matchAny: "Coincidir amb qualsevol",
  addRule: "Afegir regla",
  removeRule: "Eliminar regla",
  accept: "Sí",
  reject: "No",
  choose: "Escollir",
  upload: "Pujar",
  cancel: "Cancel·lar",
  dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
  dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
  dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
  monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
  monthNamesShort: ["Gen", "Febr", "Març", "Abr", "Maig", "Juny", "Jul", "Ag", "Set", "Oct", "Nov", "Des"],
  today: "Avui",
  now: "Ara",
  weekHeader: "Setm",
  firstDayOfWeek: 1,
  showMonthAfterYear: false,
  dateFormat: "dd/mm/yy",
  weak: "Dèbil",
  medium: "Mig",
  strong: "Fort",
  passwordPrompt: "Escriu una contrasenya",
  emptyFilterMessage: "Sense opcions disponibles",
  emptyMessage: "No s'han trobat resultats",
  aria: {
    trueLabel: "Cert",
    falseLabel: "Fals",
    nullLabel: "No seleccionat",
    star: "1 estrella",
    stars: "{star} estrelles",
    selectAll: "Seleccionar tots",
    unselectAll: "Desseleccionar tots",
    close: "Tancar",
    previous: "Anterior",
    next: "Següent",
    navigation: "Navegació",
    scrollTop: "Desplaçar amunt",
    moveTop: "Moure amunt",
    moveUp: "Pujar",
    moveDown: "Baixar",
    moveBottom: "Moure avall",
    moveToTarget: "Moure a l'objectiu",
    moveToSource: "Moure a la font",
    moveAllToTarget: "Moure tot a l'objectiu",
    moveAllToSource: "Moure tot a la font",
    pageLabel: "pàgina {page}",
    firstPageLabel: "Primera pàgina",
    lastPageLabel: "Última pàgina",
    nextPageLabel: "Pàgina següent",
    previousPageLabel: "Pàgina anterior",
    rowsPerPageLabel: "Files per pàgina",
    jumpToPageDropdownLabel: "Anar al menú desplegable de pàgina",
    jumpToPageInputLabel: "Anar a l'entrada de pàgina",
    selectRow: "Seleccionar fila",
    unselectRow: "Desmarcar fila",
    expandRow: "Expandir fila",
    collapseRow: "Reduir fila",
    showFilterMenu: "Mostrar menú del filtre",
    hideFilterMenu: "Ocultar menú del filtre",
    filterOperator: "Operador del filtre",
    filterConstraint: "Restricció del filtre",
    editRow: "Editar fila",
    saveEdit: "Guardar edició",
    cancelEdit: "Cancel·lar edició",
    listView: "Vista de llista",
    gridView: "Vista de graella",
    slide: "Desplaçar",
    slideNumber: "{slideNumber}",
    zoomImage: "Ampliar imatge",
    zoomIn: "Ampliar",
    zoomOut: "Reduir",
    rotateRight: "Girar a la dreta",
    rotateLeft: "Girar a l'esquerra",
  },
};

// custom PF labels
PrimeFaces.locales["ca"] = $.extend(true, {}, PrimeFaces.locales["ca"], {
  weekNumberTitle: "S",
  isRTL: false,
  yearSuffix: "",
  timeOnlyTitle: "Només hora",
  timeText: "Temps",
  hourText: "Hora",
  minuteText: "Minut",
  secondText: "Segon",
  millisecondText: "Millisegon",
  year: "Año",
  month: "Mes",
  week: "Setmana",
  day: "Día",
  list: "Agenda",
  allDayText: "Tot el día",
  moreLinkText: "Más....",
  noEventsText: "No hay eventos",
  aria: {
    "datatable.sort.ASC": "ordenar columna ascendente",
    "datatable.sort.DESC": "ordenar columna descendente",
    "datatable.sort.NONE": "eliminar la clasificación en la columna",
    "colorpicker.OPEN": "Abrir selector de color",
    "colorpicker.CLOSE": "Tancar el selector de color",
    "colorpicker.CLEAR": "Limpiar el color seleccionado",
    "colorpicker.MARKER": "Saturación: {s}. Brillo: {v}.",
    "colorpicker.HUESLIDER": "Deslizador de tono",
    "colorpicker.ALPHASLIDER": "Deslizador de opacidad",
    "colorpicker.INPUT": "Campo de valor de color",
    "colorpicker.FORMAT": "Formato de color",
    "colorpicker.SWATCH": "Muestra de color",
    "colorpicker.INSTRUCTION": "Selector de saturación y brillo. Utilice las teclas de flecha arriba, abajo, izquierda y derecha para seleccionar.",
    "spinner.INCREASE": "Aumentar valor",
    "spinner.DECREASE": "Disminuir valor",
    "switch.ON": "En",
    "switch.OFF": "Fuera",
    "messages.ERROR": "Error",
    "messages.FATAL": "Fatal",
    "messages.INFO": "Información",
    "messages.WARN": "Advertencia",
  },
  messages: {
    //optional for Client Side Validation
    "javax.faces.component.UIInput.REQUIRED": "{0}: Error de validación: se necesita un valor.",
    "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' debe ser un número formado por uno o varios dígitos.",
    "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' debe ser un número entre -2147483648 y 2147483647. Ejemplo: {1}",
    "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' debe ser un número formado por uno o varios dígitos.",
    "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' debe ser un número entre 4.9E-324 y 1.7976931348623157E308  Ejemplo: {1}",
    "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' debe ser un número decimal positivo o negativo.",
    "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' debe ser un número decimal positivo o negativo formado por cero o más dígitos, que pueden incluir a continuación una coma decimal y una fracción.  Ejemplo: {1}",
    "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' debe ser un número formado por uno o varios dígitos.",
    "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' debe ser un número formado por uno o varios dígitos. Ejemplo: {1}",
    "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' debe ser un número entre 0 y 255.",
    "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' debe ser un número entre 0 y 255.  Ejemplo: {1}",
    "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' debe ser un carácter válido.",
    "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' debe ser un carácter ASCII válido.",
    "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' debe ser un número formado por uno o varios dígitos.",
    "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' debe ser un número entre -32768 y 32767 Ejemplo: {1}",
    "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' debe ser 'true' o 'false'",
    "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' debe ser 'true' o 'false'.  Cualquier valor diferente a 'true' se evaluará como 'false'.",
    "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Error de validación: el valor es mayor que el máximo permitido de '{0}'",
    "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Error de validación: el valor es inferior que el mínimo permitido de '{0}'",
    "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Error de validación: el atributo especificado no está entre los valores esperados {0} y {1}.",
    "javax.faces.validator.LongRangeValidator.TYPE": "{0}: Error de validación: el valor no tiene el tipo correcto.",
    "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Error de validación: el valor es mayor que el máximo permitido de '{0}'",
    "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Error de validación: el valor es inferior que el mínimo permitido de '{0}'",
    "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Error de validación: el atributo especificado no está entre los valores esperados {0} y {1}",
    "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: Error de validación: el valor no tiene el tipo correcto.",
    "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' debe ser un número formado por uno o varios dígitos.",
    "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' debe ser un número entre 1.4E-45 y 3.4028235E38  Ejemplo: {1}",
    "javax.faces.converter.DateTimeConverter.DATE": "{2}: '{0}' no se ha podido reconocer como fecha.",
    "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: '{0}' no se ha podido reconocer como fecha. Ejemplo: {1}",
    "javax.faces.converter.DateTimeConverter.TIME": "{2}: '{0}' no se ha podido reconocer como hora.",
    "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: '{0}' no se ha podido reconocer como hora. Ejemplo: {1}",
    "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: '{0}' no se ha podido reconocer como fecha y hora.",
    "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: '{0}' no se ha podido reconocer como fecha y hora. Ejemplo: {1}",
    "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: debe especificarse el atributo 'pattern' o 'type' para convertir el valor '{0}'",
    "javax.faces.converter.NumberConverter.CURRENCY": "{2}: '{0}' no se ha podido reconocer como un valor de divisa.",
    "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: '{0}' no se ha podido reconocer como un valor de divisa. Ejemplo: {1}",
    "javax.faces.converter.NumberConverter.PERCENT": "{2}: '{0}' no se ha podido reconocer como porcentaje.",
    "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: '{0}' no se ha podido reconocer como porcentaje. Ejemplo: {1}",
    "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' no se ha podido reconocer como fecha.",
    "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' no es un número. Ejemplo: {1}",
    "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' no es un patrón numérico.",
    "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' no es un patrón numérico. Ejemplo: {1}",
    "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Error de validación: el largo es inferior que el mínimo permitido de '{0}'",
    "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Error de validación: el largo es mayor que el máximo permitido de '{0}'",
    "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Se debe establecer el patrón de Regex.",
    "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "El patrón Regex debe establecerse en un valor no vacío.",
    "javax.faces.validator.RegexValidator.NOT_MATCHED": "El patrón Regex no coincide",
    "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "El patrón Regex de '{0}' no coincide",
    "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Error en expresión regular.",
    "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Error en expresión regular, '{0}'",
    //optional for bean validation integration in client side validation
    "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
    "javax.validation.constraints.AssertFalse.message": "debe ser falso",
    "javax.validation.constraints.AssertTrue.message": "debe ser verdadero",
    "javax.validation.constraints.DecimalMax.message": "debe ser menor que o igual a {0}",
    "javax.validation.constraints.DecimalMin.message": "debe ser mayor que o igual a {0}",
    "javax.validation.constraints.Digits.message": "valor numérico fuera de los límites (se esperaba (<{0} digitos>.<{1} digitos>)",
    "javax.validation.constraints.Future.message": "debe ser una fecha futura",
    "javax.validation.constraints.Max.message": "debe ser menor que o igual a {0}",
    "javax.validation.constraints.Min.message": "debe ser mayor que o igual a {0}",
    "javax.validation.constraints.NotNull.message": "no debe ser nulo",
    "javax.validation.constraints.Null.message": "debe ser nulo",
    "javax.validation.constraints.Past.message": "debe ser una fecha pasada",
    "javax.validation.constraints.Pattern.message": 'debe coincidir con "{0}"',
    "javax.validation.constraints.Size.message": "el tamaño debe estar entre {0} y {1}",
  },
});
