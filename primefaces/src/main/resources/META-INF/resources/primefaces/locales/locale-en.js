/** English (from PrimeLocale)*/
PrimeFaces.locales["en"] = {
  startsWith: "Starts with",
  contains: "Contains",
  notContains: "Not contains",
  endsWith: "Ends with",
  equals: "Equals",
  notEquals: "Not equals",
  noFilter: "No Filter",
  filter: "Filter",
  lt: "Less than",
  lte: "Less than or equal to",
  gt: "Greater than",
  gte: "Greater than or equal to",
  dateIs: "Date is",
  dateIsNot: "Date is not",
  dateBefore: "Date is before",
  dateAfter: "Date is after",
  custom: "Custom",
  clear: "Clear",
  apply: "Apply",
  matchAll: "Match All",
  matchAny: "Match Any",
  addRule: "Add Rule",
  removeRule: "Remove Rule",
  accept: "Yes",
  reject: "No",
  choose: "Choose",
  upload: "Upload",
  cancel: "Cancel",
  completed: "Completed",
  pending: "Pending",
  dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  chooseYear: "Choose Year",
  chooseMonth: "Choose Month",
  chooseDate: "Choose Date",
  prevDecade: "Previous Decade",
  nextDecade: "Next Decade",
  prevYear: "Previous Year",
  nextYear: "Next Year",
  prevMonth: "Previous Month",
  nextMonth: "Next Month",
  prevHour: "Previous Hour",
  nextHour: "Next Hour",
  prevMinute: "Previous Minute",
  nextMinute: "Next Minute",
  prevSecond: "Previous Second",
  nextSecond: "Next Second",
  am: "AM",
  pm: "PM",
  today: "Today",
  now: "Now",
  weekHeader: "Wk",
  firstDayOfWeek: 0,
  showMonthAfterYear: false,
  dateFormat: "mm/dd/yy",
  weak: "Weak",
  medium: "Medium",
  strong: "Strong",
  passwordPrompt: "Enter a password",
  emptyFilterMessage: "No results found",
  searchMessage: "{0} results are available",
  selectionMessage: "{0} items selected",
  emptySelectionMessage: "No selected item",
  emptySearchMessage: "No results found",
  emptyMessage: "No available options",
  aria: {
    trueLabel: "True",
    falseLabel: "False",
    nullLabel: "Not Selected",
    star: "1 star",
    stars: "{star} stars",
    selectAll: "All items selected",
    unselectAll: "All items unselected",
    close: "Close",
    previous: "Previous",
    next: "Next",
    navigation: "Navigation",
    scrollTop: "Scroll Top",
    moveTop: "Move Top",
    moveUp: "Move Up",
    moveDown: "Move Down",
    moveBottom: "Move Bottom",
    moveToTarget: "Move to Target",
    moveToSource: "Move to Source",
    moveAllToTarget: "Move All to Target",
    moveAllToSource: "Move All to Source",
    pageLabel: "Page {page}",
    firstPageLabel: "First Page",
    lastPageLabel: "Last Page",
    nextPageLabel: "Next Page",
    previousPageLabel: "Previous Page",
    rowsPerPageLabel: "Rows per page",
    jumpToPageDropdownLabel: "Jump to Page Dropdown",
    jumpToPageInputLabel: "Jump to Page Input",
    selectRow: "Row Selected",
    unselectRow: "Row Unselected",
    expandRow: "Row Expanded",
    collapseRow: "Row Collapsed",
    showFilterMenu: "Show Filter Menu",
    hideFilterMenu: "Hide Filter Menu",
    filterOperator: "Filter Operator",
    filterConstraint: "Filter Constraint",
    editRow: "Edit Row",
    saveEdit: "Save Edit",
    cancelEdit: "Cancel Edit",
    listView: "List View",
    gridView: "Grid View",
    slide: "Slide",
    slideNumber: "{slideNumber}",
    zoomImage: "Zoom Image",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    rotateRight: "Rotate Right",
    rotateLeft: "Rotate Left",
  },
};

// custom PF labels
PrimeFaces.locales["en"] = $.extend(true, {}, PrimeFaces.locales["en"], {
  weekNumberTitle: "W",
  isRTL: false,
  yearSuffix: "",
  timeOnlyTitle: "Only Time",
  timeText: "Time",
  hourText: "Hour",
  minuteText: "Minute",
  secondText: "Second",
  millisecondText: "Millisecond",
  year: "Year",
  month: "Month",
  week: "Week",
  day: "Day",
  list: "Agenda",
  allDayText: "All Day",
  moreLinkText: "More...",
  noEventsText: "No Events",
  aria: {
    "datatable.sort.ASC": "activate to sort column ascending",
    "datatable.sort.DESC": "activate to sort column descending",
    "datatable.sort.NONE": "activate to remove sorting on column",
    "colorpicker.OPEN": "Open color picker",
    "colorpicker.CLOSE": "Close color picker",
    "colorpicker.CLEAR": "Clear the selected color",
    "colorpicker.MARKER": "Saturation: {s}. Brightness: {v}.",
    "colorpicker.HUESLIDER": "Hue slider",
    "colorpicker.ALPHASLIDER": "Opacity slider",
    "colorpicker.INPUT": "Color value field",
    "colorpicker.FORMAT": "Color format",
    "colorpicker.SWATCH": "Color swatch",
    "colorpicker.INSTRUCTION": "Saturation and brightness selector. Use up, down, left and right arrow keys to select.",
    "spinner.INCREASE": "Increase Value",
    "spinner.DECREASE": "Decrease Value",
    "switch.ON": "On",
    "switch.OFF": "Off",
    "messages.ERROR": "Error",
    "messages.FATAL": "Fatal",
    "messages.INFO": "Information",
    "messages.WARN": "Warning",
  },
  messages: {
    //optional for Client Side Validation
    "javax.faces.component.UIInput.REQUIRED": "{0}: Validation Error: Value is required.",
    "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' must be a number consisting of one or more digits.",
    "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' must be a number between -2147483648 and 2147483647. Example: {1}.",
    "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' must be a number consisting of one or more digits.",
    "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' must be a number between 4.9E-324 and 1.7976931348623157E308. Example: {1}.",
    "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' must be a signed decimal number.",
    "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' must be a signed decimal number consisting of zero or more digits, that may be followed by a decimal point and fraction. Example: {1}.",
    "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' must be a number consisting of one or more digits.",
    "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' must be a number consisting of one or more digits. Example: {1}.",
    "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' must be a number between 0 and 255.",
    "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' must be a number between 0 and 255. Example: {1}.",
    "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' must be a valid character.",
    "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' must be a valid ASCII character.",
    "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' must be a number consisting of one or more digits.",
    "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' must be a number between -32768 and 32767. Example: {1}.",
    "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' must be 'true' or 'false'.",
    "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' must be 'true' or 'false'.  Any value other than 'true' will evaluate to 'false'.",
    "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Validation Error: Value is greater than allowable maximum of '{0}'.",
    "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Validation Error: Value is less than allowable minimum of '{0}'.",
    "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Validation Error: Specified attribute is not between the expected values of {0} and {1}.",
    "javax.faces.validator.LongRangeValidator.TYPE": "{0}: Validation Error: Value is not of the correct type.",
    "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Validation Error: Value is greater than allowable maximum of '{0}'.",
    "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Validation Error: Value is less than allowable minimum of '{0}'.",
    "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Validation Error: Specified attribute is not between the expected values of {0} and {1}.",
    "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: Validation Error: Value is not of the correct type.",
    "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' must be a number consisting of one or more digits.",
    "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' must be a number between 1.4E-45 and 3.4028235E38  Example: {1}.",
    "javax.faces.converter.DateTimeConverter.DATE": "{2}: '{0}' could not be understood as a date.",
    "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: '{0}' could not be understood as a date. Example: {1}.",
    "javax.faces.converter.DateTimeConverter.TIME": "{2}: '{0}' could not be understood as a time.",
    "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: '{0}' could not be understood as a time. Example: {1}.",
    "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: '{0}' could not be understood as a date and time.",
    "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: '{0}' could not be understood as a date and time. Example: {1}.",
    "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: A 'pattern' or 'type' attribute must be specified to convert the value '{0}'.",
    "javax.faces.converter.NumberConverter.CURRENCY": "{2}: '{0}' could not be understood as a currency value.",
    "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: '{0}' could not be understood as a currency value. Example: {1}.",
    "javax.faces.converter.NumberConverter.PERCENT": "{2}: '{0}' could not be understood as a percentage.",
    "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: '{0}' could not be understood as a percentage. Example: {1}.",
    "javax.faces.converter.NumberConverter.NUMBER": "{2}: '{0}' could not be understood as a number.",
    "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: '{0}' could not be understood as a number. Example: {1}.",
    "javax.faces.converter.NumberConverter.PATTERN": "{2}: '{0}' could not be understood as a number pattern.",
    "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: '{0}' could not be understood as a number pattern. Example: {1}.",
    "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Validation Error: Length is less than allowable minimum of '{0}'.",
    "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Validation Error: Length is greater than allowable maximum of '{0}'.",
    "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "Regex pattern must be set.",
    "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "Regex pattern must be set to non-empty value.",
    "javax.faces.validator.RegexValidator.NOT_MATCHED": "Regex Pattern not matched.",
    "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "Regex pattern of '{0}' not matched.",
    "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Error in regular expression.",
    "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Error in regular expression, '{0}'.",
    //optional for bean validation integration in client side validation
    "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
    "javax.validation.constraints.AssertFalse.message": "must be false.",
    "javax.validation.constraints.AssertTrue.message": "must be true.",
    "javax.validation.constraints.DecimalMax.message": "must be less than or equal to {0}.",
    "javax.validation.constraints.DecimalMin.message": "must be greater than or equal to {0}.",
    "javax.validation.constraints.Digits.message": "numeric value out of bounds (&lt;{0} digits&gt;.&lt;{1} digits&gt; expected).",
    "javax.validation.constraints.Future.message": "must be in the future.",
    "javax.validation.constraints.Max.message": "must be less than or equal to {0}.",
    "javax.validation.constraints.Min.message": "must be greater than or equal to {0}.",
    "javax.validation.constraints.NotNull.message": "may not be null.",
    "javax.validation.constraints.Null.message": "must be null.",
    "javax.validation.constraints.Past.message": "must be in the past.",
    "javax.validation.constraints.Pattern.message": 'must match "{0}".',
    "javax.validation.constraints.Size.message": "size must be between {0} and {1}.",
  },
});
// United States
PrimeFaces.locales["en_US"] = PrimeFaces.locales["en"];
// Australia
PrimeFaces.locales["en_AU"] = $.extend(true, {}, PrimeFaces.locales["en"], {
  dateFormat: "dd/mm/yy",
});
// Great Britain/UK
PrimeFaces.locales["en_GB"] = $.extend(true, {}, PrimeFaces.locales["en"], {
  firstDayOfWeek: 1,
  dateFormat: "yy/mm/dd",
});
