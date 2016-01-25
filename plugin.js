var arrayToString = Object.prototype.toString.call([]);
var _isArray = function(a) {
  return Object.prototype.toString.call(a) === arrayToString;
}

exports.onHandleTag = function(ev) {
  for(var i = 0; i < ev.data.tag.length; ++i) {
    var tag = ev.data.tag[i];

    if(tag.kind === "variable" && _isArray(tag.unknown)) {
      for(var j = 0; j < tag.unknown.length; ++j) {
        if(tag.unknown[j].tagName === "@var") {
          var name = tag.unknown[j].tagValue;
          var splitName = name.split(".");
          var lastSplitName = splitName[splitName.length - 1];
          var isStatic = lastSplitName.indexOf("#") !== -1 ? false : true;
          var varName = isStatic ? lastSplitName :
              lastSplitName.split("#").pop();
          var file = tag.memberof;

          tag.kind = "member";
          tag["static"] = isStatic;
          tag.name = varName;
          tag.memberof = file + "~" + name.replace((isStatic ? "." : "#") +
              varName, "").trim(),
          tag.longname = file + "~" + name,
          tag.access = !tag.export ? "private" : tag.access;

          delete tag.export;
          delete tag.importPath;
          delete tag.importStyle;
          delete tag.unknown;
          break;
        }
      }
    }
  }
};
