

function addData(loader, key, folder) {
  loader.add(key + "-skel", "./spine/" + folder + "/" + key + ".skel", {'xhrType': 'arraybuffer'});
  loader.add(key + "-atlas", "./spine/" + folder + "/" + key + ".atlas", {'xhrTypr': 'text'});
  loader.add(key + "-png", "./spine/" + folder + "/" + key + ".png", {'xhrTypr': 'png'});
}


function genSkel(loader, resources, key) {

  var rawSkeletonData, rawAtlasData, rawPngData;
  var skel_bin = new SkeletonBinary();
  skel_bin.data = new Uint8Array(resources[key + "-skel"].data);
  skel_bin.initJson();
  rawSkeletonData = skel_bin.json;
  // use this if you want to see raw Sekeleton data
  // console.log(JSON.stringify(rawSkeletonData));
  rawAtlasData = resources[key + "-atlas"].data;
  rawPngData = resources[key + "-png"].data;
  var spineAtlas = new PIXI.spine.SpineRuntime.Atlas(rawAtlasData, function (line, callback) {
    callback(new PIXI.BaseTexture(rawPngData));
  });
  var spineAtlasParser = new PIXI.spine.SpineRuntime.AtlasAttachmentParser(spineAtlas);
  var spineJsonParser = new PIXI.spine.SpineRuntime.SkeletonJsonParser(spineAtlasParser);
  var skeletonData = spineJsonParser.readSkeletonData(rawSkeletonData, key);

  return skeletonData;
}

