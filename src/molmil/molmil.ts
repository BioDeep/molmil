namespace molmil {


export function initSettings  () {
  cifDicLocJSON = "https://pdbj.org/molmil2/mmcif_pdbx_v50_summary.json";
  cifDicLoc = "https://data.pdbj.org/pdbjplus/dictionaries/mmcif_pdbx.dic";

  var colors = {
    DUMMY: [255, 20, 147],
    H: [255, 255, 255],
    D: [255, 255, 255],
    C: [200, 200, 200],
    N: [143, 143, 255],
    O: [240, 0, 0],
    S: [255, 200, 50],
    Cl: [0, 255, 0],
    Na: [0, 0, 255],
    B: [0, 255, 0],
    P: [255, 165, 0],
    Fe: [255, 165, 0],
    Ba: [255, 165, 0],
    Mg: [34, 139, 34],
    Zn: [165, 42, 42],
    Cu: [165, 42, 42],
    Ni: [165, 42, 42],
    Br: [165, 42, 42],
    Ca: [128, 128, 144],
    Mn: [128, 128, 144],
    Al: [128, 128, 144],
    Ti: [128, 128, 144],
    Cr: [128, 128, 144],
    Ag: [128, 128, 144],
    F: [218, 165, 32],
    Si: [218, 165, 32],
    Au: [218, 165, 32],
    I: [160, 32, 240],
    Li: [178, 34, 34],
    He: [255, 192, 203]
  };

  molmil.configBox.elementColors = {};
  for (var e in colors) molmil.configBox.elementColors[e] = [colors[e][0], colors[e][1], colors[e][2], 255];

  molmil.configBox.sndStrucColor = {};
  for (var e in molmil.configBox.sndStrucInfo) molmil.configBox.sndStrucColor[e] = [molmil.configBox.sndStrucInfo[e][0], molmil.configBox.sndStrucInfo[e][1], molmil.configBox.sndStrucInfo[e][2], 255];

  molmil.configBox.bu_colors = [[0, 204, 255], [255, 51, 255], [0, 255, 102], [153, 102, 255], [255, 255, 0], [204, 102, 102], [153, 204, 102], [204, 153, 204], [153, 153, 102], [0, 204, 204], [153, 153, 153], [51, 153, 204], [0, 255, 153], [51, 153, 255], [204, 102, 153], [0, 255, 204], [51, 204, 255], [204, 102, 204], [0, 255, 255], [102, 153, 204], [204, 153, 0], [51, 204, 102], [102, 153, 255], [204, 153, 51], [51, 204, 153], [102, 204, 255], [204, 153, 102], [51, 204, 204], [153, 102, 204], [204, 153, 153], [51, 255, 51], [51, 255, 102], [153, 153, 204], [204, 204, 0], [51, 255, 153], [153, 153, 255], [204, 204, 51], [51, 255, 204], [153, 204, 255], [204, 204, 102], [51, 255, 255], [204, 102, 255], [204, 204, 153], [102, 153, 153], [204, 153, 255], [204, 204, 204], [102, 204, 51], [204, 204, 255], [255, 51, 204], [102, 204, 102], [102, 204, 153], [255, 102, 51], [102, 204, 204], [255, 102, 102], [102, 255, 0], [255, 102, 153], [102, 255, 51], [255, 102, 204], [102, 255, 102], [255, 102, 255], [102, 255, 153], [255, 153, 0], [102, 255, 204], [255, 153, 51], [102, 255, 255], [255, 153, 102], [153, 204, 0], [255, 153, 153], [153, 204, 51], [255, 153, 204], [255, 153, 255], [153, 204, 153], [255, 204, 0], [153, 204, 204], [255, 204, 51], [153, 255, 0], [255, 204, 102], [153, 255, 51], [255, 204, 153], [153, 255, 102], [255, 204, 204], [153, 255, 153], [255, 204, 255], [153, 255, 204], [153, 255, 255], [255, 255, 51], [204, 255, 0], [255, 255, 102], [204, 255, 51], [255, 255, 153], [204, 255, 102], [255, 255, 204], [204, 255, 153], [255, 255, 255], [204, 255, 204], [204, 255, 255]];

  molmil.configBox.glsl_fog = molmil.localStorageGET("molmil.settings_glsl_fog") == 1;
  molmil.configBox.projectionMode = molmil.localStorageGET("molmil.settings_PROJECTION") || 1;
  molmil.configBox.stereoMode = parseInt(molmil.localStorageGET("molmil.settings_STEREO")) || 0;
  molmil.configBox.slab_near_ratio = parseFloat(molmil.localStorageGET("molmil.settings_slab_near_ratio")) || 0;
  molmil.configBox.slab_far_ratio = parseFloat(molmil.localStorageGET("molmil.settings_slab_far_ratio")) || 1;
  molmil.configBox.smoothFactor = molmil.localStorageGET("molmil.settings_BBSF") || 2;

  var tmp = molmil.localStorageGET("molmil.settings_BGCOLOR");
  if (tmp) {
    try { molmil.configBox.BGCOLOR = JSON.parse(tmp); }
    catch (e) { }
  }

  molmil.configBox.keepBackgroundColor = molmil.localStorageGET("molmil.settings_keepBackgroundColor") == 1;

  molmil.updateBGcolor();
}

export function updateBGcolor   () {
  var fgcolor = molmil.hex2rgb(molmil.invertColor(molmil.rgb2hex(molmil.configBox.BGCOLOR[0] * 255, molmil.configBox.BGCOLOR[1] * 255, molmil.configBox.BGCOLOR[2] * 255)));
  let root = document.documentElement;
  root.style.setProperty("--BACKGROUND_COLOR", (molmil.configBox.BGCOLOR[0] * 255).toFixed() + "," + (molmil.configBox.BGCOLOR[1] * 255).toFixed() + "," + (molmil.configBox.BGCOLOR[2] * 255).toFixed());
  root.style.setProperty("--FOREGROUND_COLOR", (fgcolor[0] * 255).toFixed() + "," + (fgcolor[1] * 255).toFixed() + "," + (fgcolor[2] * 255).toFixed());

  var sf = .75, isf = 1 - sf;
  root.style.setProperty("--BACKGROUND_LIGHT_COLOR", ((molmil.configBox.BGCOLOR[0] * sf + fgcolor[0] * isf) * 255).toFixed() + "," + ((molmil.configBox.BGCOLOR[1] * sf + fgcolor[1] * isf) * 255).toFixed() + "," + ((molmil.configBox.BGCOLOR[2] * sf + fgcolor[2] * isf) * 255).toFixed());
}

// ** object controlling animation (multiple models & trajectories) **

export function fetchCanvas  () {
  for (var i = 0; i < molmil.canvasList.length; i++) if (molmil.canvasList[i].molmilViewer) return molmil.canvasList[i];
};

export function getSelectedAtom  (n, soup) {
  n = n || 0;
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;

  if (n >= soup.atomSelection.length) return;
  return soup.atomSelection[n];
};




// ** save PDB data **
 export function savePDB  (soup, atomSelection, modelId, file) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/savers.js", molmil.savePDB, null, [soup, atomSelection, modelId, file]);
};

// ** save mmJSON data **
export function saveJSO  (soup, atomSelection, modelId, file) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/savers.js", molmil.saveJSO, null, [soup, atomSelection, modelId, file]);
};

export function saveBU   (assembly_id, options, struct, soup) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/savers.js", molmil.saveBU, null, [assembly_id, options, struct, soup]);
};








// ** priestle smoothing for loop & sheet regions **
export function priestle_smoothing  (points, from, to, skip, steps) {
  var s, m, nom = to - from, tmp = new Array(nom), local = new Array(nom);
  for (m = 0; m < nom; m++) { tmp[m] = [0, 0, 0]; }
  for (s = 0; s < steps; s++) {
    for (m = 1; m < nom - 1; m++) {
      tmp[m][0] = (points[from + m - 1][0] + points[from + m + 1][0]) * .5; tmp[m][1] = (points[from + m - 1][1] + points[from + m + 1][1]) * .5; tmp[m][2] = (points[from + m - 1][2] + points[from + m + 1][2]) * .5;
      tmp[m][0] = (tmp[m][0] + points[from + m][0]) * .5; tmp[m][1] = (tmp[m][1] + points[from + m][1]) * .5; tmp[m][2] = (tmp[m][2] + points[from + m][2]) * .5;
    }
    for (m = 1; m < nom - 1; m++) {
      if (!skip.hasOwnProperty(m)) {
        points[from + m][0] = tmp[m][0]; points[from + m][1] = tmp[m][1]; points[from + m][2] = tmp[m][2];
      }
    }
  }
};

export function polynomialFit  (x, y, order) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/misc.js", this.polynomialFit, this, [x, y, order]);
}

export function polynomialCalc  (x, polynomial) {
  var i, y = polynomial[0];
  for (i = 1; i < polynomial.length; i++) y += polynomial[i] * Math.pow(x, i);
  return y;
}

// ** prepare for secondary structure element representation; transport frame calculation **
export function prepare2DRepr (chain, mdl) {
  if (chain.modelsXYZ.length <= mdl) mdl = 0;

  var ha = 32 * Math.PI / 180, hb = -11 * Math.PI / 180, cha = Math.cos(ha), sha = Math.sin(ha), chb = Math.cos(hb), shb = Math.sin(hb), hhf = 4.7, ohf = 0.5, dhf = 6.5, hf,
    //var ha = 0*Math.PI/180, hb = 0*Math.PI/180, cha = Math.cos(ha), sha = Math.sin(ha), chb = Math.cos(hb), shb = Math.sin(hb), hhf = 4.7, ohf = .5, 
    cvec = [0, 0, 0], rvec = [0, 0, 0], vec1 = [0, 0, 0], vec2 = [0, 0, 0], smoothFactor = molmil.configBox.smoothFactor, skip;

  if (chain.molecules.length < 2 || chain.isHet) {
    if (chain.SNFG) return;
    return chain.displayMode = 0;
  }
  var twoDcache = chain.twoDcache = [], m, previous_sndStruc, current_sndStruc, currentBlock, b, nor = chain.molecules.length, m0, m1, m2, m3, BN, temp = [], n, smooth, maxR;

  for (m = 0; m < nor; m++) {
    if (!chain.molecules[m].CA) continue;
    current_sndStruc = chain.molecules[m].sndStruc;
    if (current_sndStruc != previous_sndStruc || chain.molecules[m].previous == null) {
      previous_sndStruc = chain.molecules[m].sndStruc;
      twoDcache.push(currentBlock = { molecules: [], xyz: [], sndStruc: previous_sndStruc });
    }
    currentBlock.molecules.push(chain.molecules[m]);

    m0 = chain.molecules[m].CA.xyz;
    m1 = [chain.modelsXYZ[mdl][m0], chain.modelsXYZ[mdl][m0 + 1], chain.modelsXYZ[mdl][m0 + 2]];
    currentBlock.xyz.push(m1);
    temp.push(m1);
  }

  nor = temp.length;


  for (b = 0, n = 0; b < twoDcache.length; b++) {
    currentBlock = twoDcache[b];

    if (currentBlock.molecules[0].xna) currentBlock.sndStruc = molmil.displayMode_XNA;
    currentBlock.isFirst = currentBlock.molecules[0].previous == null ||
      //currentBlock.molecules[0].previous.name == "ACE" ||
      !currentBlock.molecules[0].previous.CA || b == 0;
    currentBlock.isLast = currentBlock.molecules[currentBlock.molecules.length - 1].next == null ||
      //currentBlock.molecules[currentBlock.molecules.length-1].next.name == "NME" ||
      !currentBlock.molecules[currentBlock.molecules.length - 1].next.CA || b == twoDcache.length - 1;
    if (currentBlock.sndStruc == 3) { // helix or turn...
      if (currentBlock.molecules.length > 2 && chain.displayMode == 4) {

        currentBlock.waypoints = []; currentBlock.waypoint_tangents = [];

        var base = [], x = [], y = [], z = [], deg = Math.floor(currentBlock.molecules.length / 8);
        if (deg > 5) deg = 5;
        else if (deg < 1) deg = 1;

        if (!currentBlock.isFirst) {
          base.push(-(Math.sqrt(Math.pow(temp[n - 1][0] - temp[n][0], 2) + Math.pow(temp[n - 1][1] - temp[n][1], 2) + Math.pow(temp[n - 1][2] - temp[n][2], 2))));
          x.push(temp[n - 1][0]); y.push(temp[n - 1][1]); z.push(temp[n - 1][2]);
        }


        for (m0 = 0; m0 < currentBlock.molecules.length; m0++) {
          if (currentBlock.molecules[m0].displayMode == 31) currentBlock.rocket = true;
          if (m0 > 0) base.push(base[base.length - 1] + Math.sqrt(Math.pow(temp[n + m0][0] - temp[n + m0 - 1][0], 2) + Math.pow(temp[n + m0][1] - temp[n + m0 - 1][1], 2) + Math.pow(temp[n + m0][2] - temp[n + m0 - 1][2], 2)));
          else base.push(0.0);

          x.push(temp[n + m0][0]); y.push(temp[n + m0][1]); z.push(temp[n + m0][2]);
        }

        if (!currentBlock.isLast) {
          base.push(base[m0 - 1] + Math.sqrt(Math.pow(temp[n + m0 - 1][0] - temp[n + m0][0], 2) + Math.pow(temp[n + m0 - 1][1] - temp[n + m0][1], 2) + Math.pow(temp[n + m0 - 1][2] - temp[n + m0][2], 2)));
          x.push(temp[n + m0][0]); y.push(temp[n + m0][1]); z.push(temp[n + m0][2]);
        }

        // get rid of this...
        x = molmil.polynomialFit(base, x, deg);
        y = molmil.polynomialFit(base, y, deg);
        z = molmil.polynomialFit(base, z, deg);

        var nop = Math.round(currentBlock.molecules.length / 2); if (nop < 2) nop = 2;
        if (molmil.configBox.liteMode) nop = 2;
        var sl = (base[base.length - 1] - 6.0) / (nop - 1), tl = 3.0;

        for (m0 = 0; m0 < nop; m0++) {
          currentBlock.waypoints.push([molmil.polynomialCalc(tl, x), molmil.polynomialCalc(tl, y), molmil.polynomialCalc(tl, z)]);
          tl += sl;
        }

        currentBlock.waypoint_tangents.push([currentBlock.waypoints[1][0] - currentBlock.waypoints[0][0], currentBlock.waypoints[1][1] - currentBlock.waypoints[0][1], currentBlock.waypoints[1][2] - currentBlock.waypoints[0][2]]);
        for (m0 = 1; m0 < currentBlock.waypoints.length - 1; m0++) currentBlock.waypoint_tangents.push([currentBlock.waypoints[m0 + 1][0] - currentBlock.waypoints[m0 - 1][0], currentBlock.waypoints[m0 + 1][1] - currentBlock.waypoints[m0 - 1][1], currentBlock.waypoints[m0 + 1][2] - currentBlock.waypoints[m0 - 1][2]]);
        m0 = currentBlock.waypoints.length - 1;
        currentBlock.waypoint_tangents.push([currentBlock.waypoints[m0][0] - currentBlock.waypoints[m0 - 1][0], currentBlock.waypoints[m0][1] - currentBlock.waypoints[m0 - 1][1], currentBlock.waypoints[m0][2] - currentBlock.waypoints[m0 - 1][2]]);

        for (m0 = 0; m0 < currentBlock.waypoint_tangents.length; m0++) vec3.normalize(currentBlock.waypoint_tangents[m0], currentBlock.waypoint_tangents[m0]);

        if (vec3.distance(currentBlock.waypoints[0], currentBlock.waypoints[currentBlock.waypoints.length - 1]) < 2) {
          currentBlock.rocket = false;
          currentBlock.sndStruc = 1;
        }

        if (currentBlock.rocket) {
          temp[n] = currentBlock.waypoints[0];
          temp[n + currentBlock.molecules.length - 1] = currentBlock.waypoints[currentBlock.waypoints.length - 1];
        }
      }
      else if (currentBlock.molecules.length <= 2) currentBlock.sndStruc = 1;
    }
    n += currentBlock.molecules.length;
  }

  for (b = 0, n = 0; b < twoDcache.length; b++) {
    currentBlock = twoDcache[b];

    //console.log(currentBlock.molecules[currentBlock.molecules.length-1]);
    if (currentBlock.molecules.length < 3) currentBlock.sndStruc = 1;
    if (currentBlock.sndStruc != 3 && currentBlock.sndStruc != 4 && currentBlock.sndStruc != molmil.displayMode_XNA) { // not helix or turn...
      if (currentBlock.sndStruc == 2) { // sheet
        currentBlock.normals = [[]], BN = null;
        for (m = 1; m < currentBlock.molecules.length - 1; m++) {
          BN = vec3.add([0, 0, 0], currentBlock.xyz[m - 1], currentBlock.xyz[m + 1]);
          BN[0] /= 2; BN[1] /= 2; BN[2] /= 2;
          vec3.subtract(BN, currentBlock.xyz[m], BN);
          vec3.normalize(BN, BN);
          if (m > 1 && vec3.dot(currentBlock.normals[m - 1], BN) < 0) vec3.negate(BN, BN); // there are still some problems with this, e.g. 4mie...
          currentBlock.normals.push(BN);
        }
        if (BN == null) { // length = 1
          if (!currentBlock.isFirst && !currentBlock.isLast) {
            //calculated incorrectly...
            m0 = twoDcache[b - 1].xyz[twoDcache[b - 1].xyz.length - 1];
            m1 = currentBlock.xyz[0];
            m2 = twoDcache[b + 1].xyz[0];
            BN = vec3.add([0, 0, 0], m0, m2);
            BN[0] /= 2; BN[1] /= 2; BN[2] /= 2;
            vec3.subtract(BN, m1, BN);
            vec3.normalize(BN, BN);
            vec1[0] = m2[0] - m1[0]; vec1[1] = m2[1] - m1[1]; vec1[2] = m2[2] - m1[2]; vec3.normalize(vec1, vec1); vec3.cross(vec2, vec1, BN); vec3.cross(BN, vec2, vec1);
            currentBlock.normals.push(BN);
          }
          else {
            BN = [0, 0, 0]; // hack
            currentBlock.normals.push(BN);
          }
        }
        else currentBlock.normals.push(BN);
        while (currentBlock.normals.length < currentBlock.molecules.length) currentBlock.normals.push(BN);
        currentBlock.normals[0] = currentBlock.normals[1]; currentBlock.normals[currentBlock.normals.length - 1] = currentBlock.normals[currentBlock.normals.length - 2];
        smooth = new Array(currentBlock.normals.length);
        for (m0 = 0; m0 < 2; m0++) { // smooth two times...
          for (m = 1; m < currentBlock.molecules.length - 1; m++) {
            smooth[m] = [currentBlock.normals[m - 1][0] + currentBlock.normals[m][0] + currentBlock.normals[m + 1][0], currentBlock.normals[m - 1][1] + currentBlock.normals[m][1] + currentBlock.normals[m + 1][1], currentBlock.normals[m - 1][2] + currentBlock.normals[m][2] + currentBlock.normals[m + 1][2]]
            vec3.normalize(smooth[m], smooth[m]);
          }
          for (m = 1; m < currentBlock.molecules.length - 1; m++) currentBlock.normals[m] = smooth[m];
          currentBlock.normals[0] = currentBlock.normals[1]; currentBlock.normals[currentBlock.normals.length - 1] = currentBlock.normals[currentBlock.normals.length - 2];
        }
        for (m = 0; m < currentBlock.molecules.length - 1; m++) {
          vec1[0] = currentBlock.xyz[m + 1][0] - currentBlock.xyz[m][0]; vec1[1] = currentBlock.xyz[m + 1][1] - currentBlock.xyz[m][1]; vec1[2] = currentBlock.xyz[m + 1][2] - currentBlock.xyz[m][2];
          vec3.cross(vec2, vec1, currentBlock.normals[m]);
          vec3.cross(currentBlock.normals[m], vec2, vec1);
          vec3.normalize(currentBlock.normals[m], currentBlock.normals[m]);
        }
        currentBlock.normals.push(currentBlock.normals[currentBlock.normals.length - 1]);
      }
      if (smoothFactor > 0) {
        skip = {};
        for (m = 0; m < currentBlock.molecules.length; m++) if (currentBlock.molecules[m].showSC) skip[m + (currentBlock.isFirst ? 0 : 1)] = true;
        if (!currentBlock.isLast && twoDcache[b + 1].molecules[0].showSC) skip[currentBlock.molecules.length] = true;
        molmil.priestle_smoothing(temp, n - (currentBlock.isFirst ? 0 : 1), n + currentBlock.molecules.length + (currentBlock.isLast ? 0 : 1), skip, smoothFactor);
      }
    }
    n += currentBlock.molecules.length;
  }

  for (b = 0, n = 0; b < twoDcache.length; b++) {
    currentBlock = twoDcache[b];

    currentBlock.tangents = new Array(currentBlock.molecules.length + 1);
    for (m = 0; m < currentBlock.molecules.length + 1; m++) currentBlock.tangents[m] = [0, 0, 0];
    if ((currentBlock.sndStruc == 3 || currentBlock.sndStruc == 4) && currentBlock.molecules.length < 3) currentBlock.sndStruc = 1;
    if (currentBlock.molecules[0].xna) hf = dhf;
    else hf = hhf;

    if (currentBlock.sndStruc == molmil.displayMode_XNA) { //???
      //currentBlock.binormals = new Array(currentBlock.molecules.length+1);
      m = 0;
      if (m + n < 1) { m1 = temp[0]; m3 = temp[2]; }
      else if (m + n == nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n]; }
      else if (m + n < nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n + 1]; }
      vec1[0] = m3[0] - m1[0]; vec1[1] = m3[1] - m1[1]; vec1[2] = m3[2] - m1[2];
      vec3.normalize(vec1, vec1);
      currentBlock.tangents[0] = [vec1[0] * hf, vec1[1] * hf, vec1[2] * hf];
      BN = currentBlock.molecules.length - (b == twoDcache.length - 1);

      for (m = 1; m < BN; m++) {
        m1 = temp[m + n - 1]; m2 = temp[m + n]; m3 = temp[m + n + 1];

        currentBlock.tangents[m][0] = m3[0] - m1[0]; currentBlock.tangents[m][1] = m3[1] - m1[1]; currentBlock.tangents[m][2] = m3[2] - m1[2];
        vec3.normalize(currentBlock.tangents[m], currentBlock.tangents[m]);
        currentBlock.tangents[m][0] *= hf;
        currentBlock.tangents[m][1] *= hf;
        currentBlock.tangents[m][2] *= hf;
      }

      if (m + n < 1) { m1 = temp[0]; m3 = temp[2]; }
      else if (m + n == nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n]; }
      else if (m + n < nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n + 1]; }
      vec1[0] = m3[0] - m1[0]; vec1[1] = m3[1] - m1[1]; vec1[2] = m3[2] - m1[2];
      vec3.normalize(vec1, vec1);
      currentBlock.tangents[currentBlock.tangents.length - 1] = [vec1[0] * hf, vec1[1] * hf, vec1[2] * hf];

      if (BN != currentBlock.molecules.length && currentBlock.molecules.length > 2) { currentBlock.tangents[currentBlock.tangents.length - 2] = currentBlock.tangents[currentBlock.tangents.length - 1]; }
    }
    else if (currentBlock.sndStruc == 3 || currentBlock.sndStruc == 4) { // helix or turn...
      currentBlock.binormals = new Array(currentBlock.molecules.length + 1);
      m = 0;
      if (m + n < 1) { m1 = temp[0]; m3 = temp[2]; }
      else if (m + n == nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n]; }
      else if (m + n < nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n + 1]; }
      vec1[0] = m3[0] - m1[0]; vec1[1] = m3[1] - m1[1]; vec1[2] = m3[2] - m1[2];
      vec3.normalize(vec1, vec1);
      currentBlock.tangents[0] = [vec1[0] * hf, vec1[1] * hf, vec1[2] * hf];
      BN = currentBlock.molecules.length - (b == twoDcache.length - 1);

      for (m = 1; m < BN; m++) {
        m1 = temp[m + n - 1]; m2 = temp[m + n]; m3 = temp[m + n + 1];
        currentBlock.tangents[m][0] = m3[0] - m1[0]; currentBlock.tangents[m][1] = m3[1] - m1[1]; currentBlock.tangents[m][2] = m3[2] - m1[2];

        cvec[0] = m3[0] - m1[0]; cvec[1] = m3[1] - m1[1]; cvec[2] = m3[2] - m1[2];
        vec3.normalize(cvec, cvec);

        vec1[0] = m2[0] - m1[0]; vec1[1] = m2[1] - m1[1]; vec1[2] = m2[2] - m1[2];
        vec2[0] = m3[0] - m2[0]; vec2[1] = m3[1] - m2[1]; vec2[2] = m3[2] - m2[2];

        vec3.cross(rvec, vec1, vec2)
        vec3.normalize(rvec, rvec);

        vec1[0] = cha * rvec[0]; vec1[1] = cha * rvec[1]; vec1[2] = cha * rvec[2];
        vec2[0] = sha * cvec[0]; vec2[1] = sha * cvec[1]; vec2[2] = sha * cvec[2];
        currentBlock.binormals[m] = [vec1[0] + vec2[0], vec1[1] + vec2[1], vec1[2] + vec2[2]];

        vec1[0] = chb * cvec[0]; vec1[1] = chb * cvec[1]; vec1[2] = chb * cvec[2];
        vec2[0] = shb * rvec[0]; vec2[1] = shb * rvec[1]; vec2[2] = shb * rvec[2];

        currentBlock.tangents[m][0] = (vec1[0] + vec2[0]) * hf; currentBlock.tangents[m][1] = (vec1[1] + vec2[1]) * hf; currentBlock.tangents[m][2] = (vec1[2] + vec2[2]) * hf;
        vec3.cross(vec1, currentBlock.binormals[m], currentBlock.tangents[m]);
        vec3.cross(currentBlock.binormals[m], currentBlock.tangents[m], vec1);
        vec3.normalize(currentBlock.binormals[m], currentBlock.binormals[m]);
      }

      if (m + n < 1) { m1 = temp[0]; m3 = temp[2]; }
      else if (m + n == nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n]; }
      else if (m + n < nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n + 1]; }
      vec1[0] = m3[0] - m1[0]; vec1[1] = m3[1] - m1[1]; vec1[2] = m3[2] - m1[2];
      vec3.normalize(vec1, vec1);
      currentBlock.tangents[currentBlock.tangents.length - 1] = [vec1[0] * hf, vec1[1] * hf, vec1[2] * hf];


      if (BN != currentBlock.molecules.length) {
        currentBlock.tangents[currentBlock.tangents.length - 2] = currentBlock.tangents[currentBlock.tangents.length - 1];
        //currentBlock.binormals[currentBlock.binormals.length-2] = currentBlock.binormals[currentBlock.binormals.length-3];
        vec1 = currentBlock.binormals[currentBlock.binormals.length - 3]; currentBlock.binormals[currentBlock.binormals.length - 2] = [-vec1[0], -vec1[1], -vec1[2]]; // 2mp8, 3vg9
      }

      currentBlock.binormals[0] = currentBlock.binormals[1];
      currentBlock.binormals[currentBlock.binormals.length - 1] = currentBlock.binormals[currentBlock.binormals.length - 2];
    }
    else {
      maxR = currentBlock.sndStruc == 5 ? 144 : 60;
      if (temp.length < 3) {
        if (temp.length == 1) currentBlock.tangents[0] = currentBlock.tangents[1] = [1, 0, 0];
        else {
          currentBlock.tangents[0] = currentBlock.tangents[1] = currentBlock.tangents[2] = [temp[1][0] - temp[0][0], temp[1][1] - temp[0][1], temp[1][2] - temp[0][2]];
        }
      }
      else {
        for (m = 0; m < currentBlock.molecules.length + 1; m++) {
          if (m + n < 1) { m1 = temp[0]; m3 = temp[2]; }
          else if (m + n == nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n]; }
          else if (m + n < nor - 1) { m1 = temp[m + n - 1]; m3 = temp[m + n + 1]; }
          vec1[0] = m3[0] - m1[0]; vec1[1] = m3[1] - m1[1]; vec1[2] = m3[2] - m1[2];
          if (m > 0 && vec1[0] * vec1[0] + vec1[1] * vec1[1] + vec1[2] * vec1[2] > maxR) { currentBlock.tangents[m] = currentBlock.tangents[m - 1]; }
          else { currentBlock.tangents[m][0] = vec1[0] * ohf; currentBlock.tangents[m][1] = vec1[1] * ohf; currentBlock.tangents[m][2] = vec1[2] * ohf; }
        }
        if (currentBlock.molecules[m - 2].next == null && m + n - 3 > -1) { currentBlock.tangents[m - 1][0] = temp[m + n - 2][0] - temp[m + n - 3][0]; currentBlock.tangents[m - 1][1] = temp[m + n - 2][1] - temp[m + n - 3][1]; currentBlock.tangents[m - 1][2] = temp[m + n - 2][2] - temp[m + n - 3][2]; }
      }
    }
    n += currentBlock.molecules.length;
  }

  var nextBlock;
  for (b = 0; b < twoDcache.length; b++) {
    currentBlock = twoDcache[b];

    //console.log(b, currentBlock.molecules.length);

    if (currentBlock.sndStruc == 3 && !currentBlock.rocket) { // helix...
      //BN = currentBlock.molecules.length-(b == twoDcache.length-1)-1;
      BN = currentBlock.molecules.length - (b == twoDcache.length - 1 ? 1 : 0);
      for (m = 1; m < BN; m++) {
        if (vec3.dot(currentBlock.binormals[m - 1], currentBlock.binormals[m]) < 0) {
          nextBlock = { molecules: [], xyz: [], tangents: [], binormals: [], sndStruc: 3 };
          currentBlock.nextBlock = nextBlock;
          currentBlock.Cresume = true;
          nextBlock.Nresume = true;
          nextBlock.invertedBinormals = !currentBlock.invertedBinormals;
          nextBlock.isLast = currentBlock.isLast; currentBlock.isLast = false;

          for (n = m; n < currentBlock.binormals.length; n++) vec3.negate(currentBlock.binormals[n], currentBlock.binormals[n]);

          nextBlock.molecules = currentBlock.molecules.slice(m);
          nextBlock.tangents = currentBlock.tangents.slice(m);
          nextBlock.binormals = currentBlock.binormals.slice(m);
          nextBlock.xyz = currentBlock.xyz.slice(m);

          currentBlock.molecules = currentBlock.molecules.splice(0, m);
          currentBlock.tangents = currentBlock.tangents.splice(0, m + 1);
          currentBlock.binormals = currentBlock.binormals.splice(0, m + 1);
          currentBlock.xyz = currentBlock.xyz.splice(0, m);

          if (currentBlock.rocket) {
            nextBlock.rocket = nextBlock.skip = true;
            nextBlock.waypoints = currentBlock.waypoints;
            nextBlock.waypoint_tangents = currentBlock.waypoint_tangents;
          }

          if (currentBlock.molecules.length == 1) currentBlock.invertedBinormals = !currentBlock.invertedBinormals;

          twoDcache.splice(b + 1, 0, nextBlock);
          break;
        }
      }
      if (vec3.dot(currentBlock.binormals[m - 1], currentBlock.binormals[m]) < 0) vec3.negate(currentBlock.binormals[m], currentBlock.binormals[m]);
    }
  }
};






// fbo

molmil.FBO = function (gl, width, height) {
  this.width = width; this.height = height; this.gl = gl;
  this.textures = {}; // textureID, GLTextureID, colourNumber, internalFormat, format
  this.colourNumber = 0;
  this.fbo = null;
  this.depthBuffer = null;
  this.multisample = false;
}

molmil.FBO.prototype.addTexture = function (textureID, internalFormat, format) {
  if (textureID in this.textures) { this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[textureID][0]); }
  else {
    var texture = this.gl.createTexture();
    this.textures[textureID] = [texture, this.colourNumber++, internalFormat, format];
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.NEAREST);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.NEAREST);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
  }
  this.gl.texImage2D(this.gl.TEXTURE_2D, 0, internalFormat, this.width, this.height, 0, format, this.gl.UNSIGNED_BYTE, null);
  this.gl.bindTexture(this.gl.TEXTURE_2D, null);
};

molmil.FBO.prototype.setup = function () {
  if (this.fbo != null) this.rebindTextures(true);
  else {
    if (this.multisample && this.multisample in this.textures && molmil.configBox.webGL2) {
      var texture = this.textures[this.multisample];
      this.fbo2 = this.gl.createFramebuffer();
      this.colorRenderbuffer = this.gl.createRenderbuffer();
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.colorRenderbuffer);
      this.gl.renderbufferStorageMultisample(this.gl.RENDERBUFFER, 4, this.gl.RGBA, this.width, this.height);

      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
      this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0 + texture[1], this.gl.RENDERBUFFER, this.colorRenderbuffer);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo2);
      this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0 + texture[1], this.gl.TEXTURE_2D, texture[0], 0);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }
    else {
      this.multisample = false;

      this.fbo = this.gl.createFramebuffer();
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
      this.rebindTextures(false);
      this.depthBuffer = this.gl.createRenderbuffer();
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
      this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.width, this.height); // this.gl.DEPTH_COMPONENT16 --> GL_DEPTH_COMPONENT24
      this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

  }
};

molmil.FBO.prototype.post = function () {
  if (this.multisample) {
    this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.fbo);
    this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, this.fbo2);
    this.gl.clearBufferfv(this.gl.COLOR, 0, [0.0, 0.0, 0.0, 1.0]);
    this.gl.blitFramebuffer(
      0, 0, this.width, this.height,
      0, 0, this.width, this.height,
      this.gl.COLOR_BUFFER_BIT, this.gl.NEAREST
    );
  }
};

molmil.FBO.prototype.rebindTextures = function (unbind) {
  this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
  for (var t in this.textures) this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0 + this.textures[t][1], this.gl.TEXTURE_2D, this.textures[t][0], 0);
  this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
  if (unbind) this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

};

molmil.FBO.prototype.bindTextureToUniform = function (textureID, uniformLocation, bindLocation) {
  this.gl.activeTexture(this.gl.TEXTURE0 + bindLocation);
  this.gl.bindTexture(this.gl.TEXTURE_2D, this.textures[textureID][0]);
  this.gl.uniform1i(uniformLocation, bindLocation);
};

molmil.FBO.prototype.resize = function (width, height) {
  if (width == this.width && height == this.height) return;
  this.width = width; this.height = height;
  for (var t in this.textures) this.addTexture(t, this.textures[t][2], this.textures[t][3]);
  this.rebindTextures(false);
  this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
  this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.width, this.height);
  this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
  this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

  if (this.multisample) {
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.colorRenderbuffer);
    this.gl.renderbufferStorageMultisample(this.gl.RENDERBUFFER, 4, this.gl.RGBA8, this.width, this.height);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo2);
    this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.RENDERBUFFER, this.colorRenderbuffer);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
  }
};

molmil.FBO.prototype.bind = function () {
  this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
  //if (this.multisample) this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo2);
};

molmil.FBO.prototype.unbind = function () {
  this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
};

// ** camera object **

molmil.glCamera = function () { this.reset(); }

molmil.glCamera.prototype.reset = function () {
  this.x = this.y = this.z = 0.0;
  this.QPitch = quat.create();
  this.QHeading = quat.create();
  this.QView = quat.create();
  this.QRoll = quat.create();
  this.Qtmp = quat.create();
  this.pitchAngle = this.headingAngle = this.rollAngle = 0.0;
  this.vrXYZ = [0.0, 0.0, 0.0];
  this.vrXYZupdated = false;
}

molmil.glCamera.prototype.generateMatrix = function () {
  var matrix = mat4.create(); mat4.fromQuat(matrix, this.QView);
  matrix[12] = this.x;
  matrix[13] = this.y;
  matrix[14] = this.z;
  return matrix;
}

molmil.glCamera.prototype.positionCamera = function () {
  quat.setAxisAngle(this.QPitch, [1, 0, 0], (this.pitchAngle / 180) * Math.PI);
  quat.setAxisAngle(this.QHeading, [0, 1, 0], (this.headingAngle / 180) * Math.PI);
  quat.setAxisAngle(this.QRoll, [0, 0, 1], (this.rollAngle / 180) * Math.PI);
  var q = quat.create();
  quat.multiply(q, this.QPitch, this.QHeading); quat.multiply(q, q, this.QRoll);
  quat.multiply(this.QView, q, this.QView);
  this.headingAngle = this.pitchAngle = this.rollAngle = 0.0;
}

// ** mouse/touch interface helper fucntions **

molmil.handle_molmilViewer_mouseDown = function (event) {
  if (molmil.settings.recordingMode) return;
  molmil.activeCanvas = this;
  molmil.mouseDown = 1;
  molmil.mouseDownS[event.which] = 1;
  molmil.Xcoord = event.clientX;
  molmil.Ycoord = event.clientY;
  molmil.Zcoord = event.clientY;
  molmil.mouseMoved = false;
  document.oncontextmenu = molmil.disableContextMenu;
}

molmil.disableContextMenu = function (e) {
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  e.cancelBubble = true;
  e.cancel = true;
  e.returnValue = false;
  return false;
}

molmil.getOffset = function (evt) {
  var el = evt.target, x = 0, y = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    x += el.offsetLeft;// - el.scrollLeft;
    y += el.offsetTop;// - el.scrollTop;
    el = el.offsetParent;
  }

  x -= window.pageXOffset || 0;
  y -= window.pageYOffset || 0;

  x = evt.clientX - x;
  y = evt.clientY - y;

  return { x: x, y: y };
}

molmil.handle_molmilViewer_mouseUp = function (event) {
  if (molmil.settings.recordingMode) return;
  var activeCanvas = molmil.activeCanvas;
  if (!molmil.mouseMoved && activeCanvas) {
    if (event.srcElement != activeCanvas) return;
    if (event.ctrlKey != activeCanvas.atomCORset) {
      if (event.ctrlKey) activeCanvas.molmilViewer.setCOR();
      else activeCanvas.molmilViewer.resetCOR();
      activeCanvas.renderer.modelViewMatrix = activeCanvas.renderer.camera.generateMatrix();
    }
    if (document.fullscreenElement) var offset = { x: event.screenX, y: event.screenY };
    else var offset = molmil.getOffset(event);
    var dpr = window.devicePixelRatio || 1;
    activeCanvas.renderer.soup.selectObject(offset.x * dpr, offset.y * dpr, event);
    if (event.which == 3 && activeCanvas.renderer.soup.UI) {
      activeCanvas.renderer.soup.UI.showContextMenuAtom(event.clientX, event.clientY, event.pageX);
    }
  }

  molmil.mouseDownS[event.which] = 0;
  if (navigator.userAgent.indexOf("Mac") != -1 && !event.ctrlKey && molmil.mouseDownS[3]) molmil.mouseDownS[3] = 0;

  var nm = true;
  for (var e in molmil.mouseDownS) if (molmil.mouseDownS[e]) { nm = false; break; }
  molmil.mouseDown = nm ? 0 : 1;
  if (nm) {
    setTimeout(function () { document.oncontextmenu = null; }, 10);
    activeCanvas = null;
  }
  else {
    event.preventDefault();
    return false;
  }
}

molmil.handle_molmilViewer_mouseMove = function (event) {
  if (molmil.settings.recordingMode) return;
  var movementX = event.movementX, movementY = event.movementY;
  if (movementX === undefined) movementX = event.clientX - molmil.Xcoord;
  if (movementY === undefined) movementY = event.clientY - molmil.Ycoord;

  if (movementX == 0 && movementY == 0) return; // workaround weird browser bug

  var activeCanvas = molmil.activeCanvas;

  if (!molmil.mouseDown || !activeCanvas) { return; }
  molmil.mouseMoved = true;
  if (molmil.mouseDownS[2] || (molmil.mouseDownS[1] && molmil.mouseDownS[3]) || (molmil.mouseDownS[1] && event.shiftKey)) {
    activeCanvas.renderer.TransX += movementX * .5;
    activeCanvas.renderer.TransY += movementY * .5;
    molmil.Xcoord = event.clientX;
    molmil.Zcoord = molmil.Ycoord = event.clientY;
  }
  else if (molmil.mouseDownS[1]) {
    activeCanvas.renderer.heading += movementX;
    activeCanvas.renderer.pitch += movementY;
    molmil.Xcoord = event.clientX;
    molmil.Ycoord = event.clientY;
  }
  else if (molmil.mouseDownS[3]) {
    activeCanvas.renderer.TransZ = (event.clientY - molmil.Zcoord) || movementY;
    molmil.Zcoord = event.clientY;
  }
  if (event.ctrlKey != activeCanvas.atomCORset) {
    if (event.ctrlKey) activeCanvas.molmilViewer.setCOR();
    else activeCanvas.molmilViewer.resetCOR();
  }

  activeCanvas.update = true;

  event.preventDefault();
}

molmil.infoPopUp = function (text) {
  var popup = document.getElementById("molmil_info_popup");
  if (popup == null) {
    popup = molmil_dep.dcE("div")
    popup.id = "molmil_info_popup";
    document.body.pushNode(popup);
  }
  if (text === undefined) {
    if (popup.timeout) clearTimeout(popup.timeout);
    popup.classList.remove("visible");
    return;
  }
  popup.innerHTML = text;
  popup.classList.add("visible")
  if (popup.timeout) clearTimeout(popup.timeout);
  popup.timeout = setTimeout(function () {
    popup.classList.remove("visible");
  }, 5000);
}

molmil.handle_molmilViewer_mouseScroll = function (event) { // not always firing in vr mode...
  if (molmil.settings.recordingMode) return;
  if (molmil.configBox.wheelZoomRequiresCtrl && !document.fullscreenElement) {
    if (!event.ctrlKey) return molmil.infoPopUp("Press Ctrl button while scrolling to enable zoom");
    else molmil.infoPopUp();
  }
  event.target.renderer.TransZ -= (event.wheelDelta || -event.detail * 40 || event.deltaY * 40 || event.deltaX * 40);
  if (molmil_dep.dBT.MSIE) event.target.renderer.TransZ /= 50;
  event.target.update = true;
  try { event.preventDefault(); }
  catch (e) { }
  return false;
}

molmil.onDocumentMouseMove = function (event) { // maybe deprecated
  if (molmil.settings.recordingMode) return;
  if (molmil.mouseXstart == null) { molmil.mouseXstart = event.clientX; molmil.mouseYstart = event.clientY; }
  mouseX = event.clientX - molmil.mouseXstart;
  mouseY = event.clientY - molmil.mouseYstart;
  molmil.mouseXstart = event.clientX; molmil.mouseYstart = event.clientY;
}

molmil.handle_molmilViewer_touchStart = function (event) {
  if (molmil.settings.recordingMode) return;
  if (document.body.onmousedown) {
    document.body.onmousedown();
    document.body.onmousedown = null;
  }
  molmil.activeCanvas = this;
  molmil.touchList = [];
  for (var t = 0; t < event.touches.length; t++) molmil.touchList.push([event.touches[t].clientX, event.touches[t].clientY]);
  if (molmil.touchList.length == 1) {
    molmil.touchMode = 1;
    molmil.previousTouchEvent = event;
    molmil.longTouchTID = setTimeout(molmil.handle_molmilViewer_touchHold, 500);
  }
  else if (molmil.touchList.length == 2) {
    var D = vec2.distance([0, 0], [screen.width, screen.height]);
    var b = vec2.distance(molmil.touchList[0], molmil.touchList[1]);
    if (b / D < 0.075) molmil.touchMode = 3;
    else molmil.touchMode = 2;
  }
  event.preventDefault();
  //touchMode = 0;
}

molmil.handle_molmilViewer_touchHold = function () {
  if (molmil.settings.recordingMode) return;
  if (!molmil.longTouchTID) return;
  if (molmil.previousTouchEvent) {
    if (Math.sqrt((Math.pow(molmil.previousTouchEvent.touches[0].clientX - molmil.touchList[0][0], 2)) + (Math.pow(molmil.previousTouchEvent.touches[0].clientY - molmil.touchList[0][1], 2))) < 1) {
      if (document.fullscreenElement) var offset = { x: molmil.previousTouchEvent.touches[0].screenX, y: molmil.previousTouchEvent.touches[0].screenY };
      else var offset = molmil.getOffset(molmil.previousTouchEvent.touches[0]);
      var dpr = window.devicePixelRatio || 1;
      molmil.activeCanvas.renderer.soup.selectObject(offset.x * dpr, offset.y * dpr, event);
    }
    if (molmil.activeCanvas.renderer.soup.UI) molmil.activeCanvas.renderer.soup.UI.showContextMenuAtom(molmil.previousTouchEvent.touches[0].clientX, molmil.previousTouchEvent.touches[0].clientY, molmil.previousTouchEvent.touches[0].pageX);
  }

  molmil.longTouchTID = null; molmil.previousTouchEvent = null;
}

molmil.handle_molmilViewer_touchMove = function (event) {
  if (molmil.settings.recordingMode) return;
  if (!molmil.touchList.length || !molmil.activeCanvas) { return; }
  if (molmil.longTouchTID) {
    clearTimeout(molmil.longTouchTID);
    molmil.longTouchTID = null; //previousTouchEvent = event;
  }
  var tmp = [];

  for (var t = 0; t < event.touches.length; t++) tmp.push([event.touches[t].clientX, event.touches[t].clientY]);

  if (molmil.touchMode == 1) {
    molmil.activeCanvas.renderer.heading += tmp[0][0] - molmil.touchList[0][0];
    molmil.activeCanvas.renderer.pitch += tmp[0][1] - molmil.touchList[0][1];
  }
  else if (molmil.touchMode == 2) {
    molmil.activeCanvas.renderer.TransZ = (vec2.distance(tmp[0], tmp[1]) - vec2.distance(molmil.touchList[0], molmil.touchList[1])) * 5.0;
  }
  else if (molmil.touchMode == 3) {
    var D = vec2.distance([0, 0], [screen.width, screen.height]);
    var b = vec2.distance(molmil.touchList[0], molmil.touchList[1]);
    if (b / D < 0.075) {
      molmil.activeCanvas.renderer.TransX = ((tmp[0][0] + tmp[1][0]) / 2) - ((molmil.touchList[0][0] + molmil.touchList[1][0]) / 2);
      molmil.activeCanvas.renderer.TransY = ((tmp[0][1] + tmp[1][1]) / 2) - ((molmil.touchList[0][1] + molmil.touchList[1][1]) / 2);
    }
  }
  molmil.touchList = tmp;

  molmil.activeCanvas.update = true;

  event.preventDefault();
}

molmil.handle_molmilViewer_touchEnd = function () {
  if (molmil.settings.recordingMode) return;
  if (molmil.previousTouchEvent && molmil.touchMode == 1) {
    if (Math.sqrt((Math.pow(molmil.previousTouchEvent.touches[0].clientX - molmil.touchList[0][0], 2)) + (Math.pow(molmil.previousTouchEvent.touches[0].clientY - molmil.touchList[0][1], 2))) < 1) {
      if (document.fullscreenElement) var offset = { x: molmil.previousTouchEvent.touches[0].screenX, y: molmil.previousTouchEvent.touches[0].screenY };
      else var offset = molmil.getOffset(molmil.previousTouchEvent.touches[0]);
      var dpr = window.devicePixelRatio || 1;
      molmil.activeCanvas.renderer.soup.selectObject(offset.x * dpr, offset.y * dpr, event);
    }
  }

  molmil.touchList = []; molmil.touchMode = 0; molmil.longTouchTID = null;
}

molmil.handle_contextMenu_touchStart = function (event) {
  previousTouchEvent = event;
  longTouchTID = setTimeout(molmil.handle_contextMenu_touchHold, 500);
  event.preventDefault();
}

molmil.handle_contextMenu_touchHold = function () {
  if (!longTouchTID) return;
  longTouchTID = null;
  previousTouchEvent.touches[0].target.oncontextmenu(previousTouchEvent.touches[0]);
  previousTouchEvent = null;
}

molmil.handle_contextMenu_touchEnd = function (event) {
  if (previousTouchEvent) previousTouchEvent.touches[0].target.onclick();
  longTouchTID = null; clearTimeout(longTouchTID);
}


// ** quick functions **

// ** shows/hides (part of) a structure **
molmil.toggleEntry = function (obj, dm, rebuildGeometry, soup) { molmil.displayEntry(obj, dm ? molmil.displayMode_Visible : molmil.displayMode_None, rebuildGeometry, soup); }


// ** change display mode of a system/chain/molecule/atom **
molmil.displayEntry = function (obj, dm, rebuildGeometry, soup, settings) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  if (obj instanceof Array) {
    for (var i = 0; i < obj.length; i++) molmil.displayEntry(obj[i], dm, null, null, settings);
    if (rebuildGeometry) {
      soup.renderer.initBuffers();
      soup.renderer.canvas.update = true;
    }
    return;
  }
  settings = settings || {};

  if (soup && ((soup.SCstuff && dm % 1 == 0) || (!soup.SCstuff && dm % 1 != 0))) molmil.geometry.reInitChains = true;

  var m, a, c, chain, mol, backboneAtoms = molmil.configBox.backboneAtoms4Display;

  //xna
  if (obj instanceof molmil.entryObject) {

    if (dm == molmil.displayMode_None) { // new none function...
      obj.display = false;
    }
    else if (dm == molmil.displayMode_Visible) {
      obj.display = true;
    }
    else if (dm == molmil.displayMode_None) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = 0;
        for (var a = 0; a < chain.atoms.length; a++) chain.atoms[a].displayMode = 0;
        for (var m = 0; m < chain.molecules.length; m++) {
          chain.molecules[m].displayMode = 0;
          chain.molecules[m].showSC = false;
        }
      }
    }
    else if (dm == molmil.displayMode_Default) {
      var atmDM = settings.newweb ? 2 : 3;
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        if (settings.newweb && (chain.molWeight < 550 || (chain.molWeight < 2000 && chain.isCyclic) || chain.molecules.length < 4)) chain.displayMode = 1;
        else chain.displayMode = 3;
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          if ((mol.ligand && !mol.SNFG) || mol.water) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = atmDM; }
          else if (mol.xna) for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0;
          else if (mol.weirdAA && !mol.SNFG) {
            for (a = 0; a < mol.atoms.length; a++) {
              if (chain.displayMode != 1 && backboneAtoms.hasOwnProperty(mol.atoms[a].atomName)) mol.atoms[a].displayMode = 0;
              else mol.atoms[a].displayMode = atmDM;
            }
          }
          else if (!mol.SNFG && (chain.displayMode == 1)) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = atmDM; }
          else for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0;

          if (mol.SNFG) {
            mol.showSC = false;
            mol.chain.displayMode = 3;
            if (mol.res_con) {
              mol.res_con.showSC = true;
              for (var a = 0; a < (mol.res_con.selection || []).length; a++) {
                if (!backboneAtoms.hasOwnProperty(mol.res_con.selection[a].atomName)) mol.res_con.selection[a].displayMode = 0;
              }
            }
          }
          else mol.showSC = mol.weirdAA;

          mol.displayMode = 3;
        }
      }

      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        for (a = 0; a < chain.showBBatoms.length; a++) {
          if (!chain.showBBatoms[a].molecule.SNFG && !chain.showBBatoms[a].molecule.snfg_con) chain.showBBatoms[a].displayMode = atmDM;
          else if (chain.showBBatoms[a].molecule.snfg_con) chain.showBBatoms[a].molecule.showSC = true;
        }
      }

      molmil.geometry.reInitChains = true;
    }
    else if (dm == molmil.displayMode_Spacefill) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = 1;
        for (var a = 0; a < chain.atoms.length; a++) chain.atoms[a].displayMode = 1;
        for (var m = 0; m < chain.molecules.length; m++) {
          chain.molecules[m].displayMode = 0;
          chain.molecules[m].showSC = true;
          chain.twoDcache = null;
        }
      }
    }
    else if (dm == molmil.displayMode_Spacefill_SC) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        for (var a = 0; a < chain.atoms.length; a++) {
          if (chain.atoms[a].molecule.xna) chain.atoms[a].displayMode = 1;
          else {
            if (!chain.atoms[a].molecule.ligand && !chain.atoms[a].molecule.water && backboneAtoms.hasOwnProperty(chain.atoms[a].atomName)) chain.atoms[a].displayMode = 0;
            else chain.atoms[a].displayMode = 1;
          }
        }
        for (var m = 0; m < chain.molecules.length; m++) { chain.molecules[m].showSC = true; chain.twoDcache = null; }
      }
    }
    else if (dm == molmil.displayMode_BallStick) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = 1;
        for (var a = 0; a < chain.atoms.length; a++) chain.atoms[a].displayMode = 2;
        for (var m = 0; m < chain.molecules.length; m++) {
          chain.molecules[m].displayMode = 0;
          chain.molecules[m].showSC = true;
          chain.twoDcache = null;
        }
      }
    }
    else if (dm == molmil.displayMode_BallStick_SC) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        for (var a = 0; a < chain.atoms.length; a++) {
          if (chain.atoms[a].molecule.xna) chain.atoms[a].displayMode = 2;
          else {
            if (!chain.atoms[a].molecule.ligand && !chain.atoms[a].molecule.water && backboneAtoms.hasOwnProperty(chain.atoms[a].atomName)) chain.atoms[a].displayMode = 0;
            else chain.atoms[a].displayMode = 2;
          }
        }
        for (var m = 0; m < chain.molecules.length; m++) { chain.molecules[m].showSC = true; chain.twoDcache = null; }
      }
    }
    else if (dm == molmil.displayMode_Stick) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = 1;
        for (var a = 0; a < chain.atoms.length; a++) chain.atoms[a].displayMode = 3;
        for (var m = 0; m < chain.molecules.length; m++) {
          chain.molecules[m].displayMode = 0;
          chain.molecules[m].showSC = true;
          chain.twoDcache = null;
        }
      }
    }
    else if (dm == molmil.displayMode_Stick_SC) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        for (var a = 0; a < chain.atoms.length; a++) {
          if (chain.atoms[a].molecule.xna) chain.atoms[a].displayMode = 3;
          else {
            if (!chain.atoms[a].molecule.ligand && !chain.atoms[a].molecule.water && !(chain.atoms[a].molecule.name == "PRO" && chain.atoms[a].atomName == "N") && backboneAtoms.hasOwnProperty(chain.atoms[a].atomName)) chain.atoms[a].displayMode = 0;
            else chain.atoms[a].displayMode = 3;
          }
        }
        for (var m = 0; m < chain.molecules.length; m++) {
          chain.molecules[m].showSC = true;
          chain.twoDcache = null;
        }
      }
    }
    else if (dm == molmil.displayMode_Wireframe) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = 1;
        for (var a = 0; a < chain.atoms.length; a++) chain.atoms[a].displayMode = 4;
        for (var m = 0; m < chain.molecules.length; m++) {
          chain.molecules[m].displayMode = 0;
          chain.molecules[m].showSC = true;
          chain.twoDcache = null;
        }
      }
    }
    else if (dm == molmil.displayMode_Wireframe_SC) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        for (var a = 0; a < chain.atoms.length; a++) {
          if (chain.atoms[a].molecule.xna) chain.atoms[a].displayMode = 4;
          else {
            if (!chain.atoms[a].molecule.ligand && !chain.atoms[a].molecule.water && !(chain.atoms[a].molecule.name == "PRO" && chain.atoms[a].atomName == "N") && backboneAtoms.hasOwnProperty(chain.atoms[a].atomName)) chain.atoms[a].displayMode = 0;
            else chain.atoms[a].displayMode = 4;
          }
        }
        for (var m = 0; m < chain.molecules.length; m++) {
          chain.molecules[m].showSC = true;
          chain.twoDcache = null;
        }
      }
    }
    else if (dm == molmil.displayMode_CaTrace) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = 1;
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          if (!mol.ligand && !mol.water) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0; }
          mol.displayMode = 1;
          mol.showSC = false;
        }
      }
    }
    else if (dm == molmil.displayMode_Tube) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = 2;
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          if ((!mol.ligand && !mol.water) || mol.SNFG) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0; }
          mol.displayMode = 2;
          mol.showSC = false;
        }
      }
    }
    else if (dm == molmil.displayMode_Cartoon) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = 3;
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          if ((!mol.ligand && !mol.water) || mol.SNFG) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0; }
          mol.displayMode = 3;
          mol.showSC = false;
        }
      }
    }
    else if (dm == molmil.displayMode_CartoonRocket) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = 4;
        chain.twoDcache = null;
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          if (!mol.ligand && !mol.water) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0; }
          else if (mol.SNFG) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 3; }
          mol.displayMode = 31;
          mol.showSC = false;
        }
      }
    }
    else if (dm == molmil.displayMode_ChainSurfaceCG) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = molmil.displayMode_ChainSurfaceCG;
        chain.HQsurface = false;
      }
    }
    else if (dm == molmil.displayMode_ChainSurfaceCG + 0.5) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = molmil.displayMode_ChainSurfaceCG;
        chain.HQsurface = true;
      }
    }
    else if (dm == molmil.displayMode_ChainSurfaceSimple) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.displayMode = molmil.displayMode_ChainSurfaceSimple;
        chain.displaySettings = settings;
      }
    }
  }
  else if (obj instanceof molmil.chainObject) {
    if (dm == molmil.displayMode_None) {
      obj.display = false;
    }
    else if (dm == molmil.displayMode_Visible) {
      obj.display = true;
    }
    else if (dm == molmil.displayMode_None) {
      obj.display = false;
      obj.displayMode = 0;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        mol.displayMode = 0;
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0;
        mol.showSC = false;
      }
    }
    else if (dm == molmil.displayMode_Default) {
      obj.displayMode = 3;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        if ((mol.ligand && !mol.SNFG) && !mol.water) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 3; }
        else if (mol.xna) for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0;
        else { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0; }
        mol.displayMode = 3;
        mol.showSC = false;
      }
    }
    else if (dm == molmil.displayMode_Spacefill) {
      obj.displayMode = 1;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        mol.displayMode = 0;
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 1;
        mol.showSC = true;
        mol.chain.twoDcache = null;
      }
    }
    else if (dm == molmil.displayMode_Spacefill_SC) {
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        for (a = 0; a < mol.atoms.length; a++) {
          if (mol.xna) mol.atoms[a].displayMode = 1;
          else {
            if (!mol.ligand && !mol.water && backboneAtoms.hasOwnProperty(mol.atoms[a].atomName)) mol.atoms[a].displayMode = 0;
            else mol.atoms[a].displayMode = 1;
          }
        }
        mol.showSC = true;
        mol.chain.twoDcache = null;
      }
    }
    else if (dm == molmil.displayMode_BallStick) {
      obj.displayMode = 1;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        mol.displayMode = 0;
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 2;
        mol.showSC = true;
        mol.chain.twoDcache = null;
      }
    }
    else if (dm == molmil.displayMode_BallStick_SC) {
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        for (a = 0; a < mol.atoms.length; a++) {
          if (mol.xna) mol.atoms[a].displayMode = 2;
          else {
            if (!mol.ligand && !mol.water && !(mol.name == "PRO" && mol.atoms[a].atomName == "N") && backboneAtoms.hasOwnProperty(mol.atoms[a].atomName)) mol.atoms[a].displayMode = 0;
            else mol.atoms[a].displayMode = 2;
          }
        }
        mol.showSC = true;
        mol.chain.twoDcache = null;
      }
    }
    else if (dm == molmil.displayMode_Stick) {
      obj.displayMode = 1;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        mol.displayMode = 0;
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 3;
        mol.showSC = true;
        mol.chain.twoDcache = null;
      }
    }
    else if (dm == molmil.displayMode_Stick_SC) {
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        for (a = 0; a < mol.atoms.length; a++) {
          if (mol.xna) mol.atoms[a].displayMode = 3;
          else {
            if (!mol.ligand && !mol.water && !(mol.name == "PRO" && mol.atoms[a].atomName == "N") && backboneAtoms.hasOwnProperty(mol.atoms[a].atomName)) mol.atoms[a].displayMode = 0;
            else mol.atoms[a].displayMode = 3;
          }
        }
        mol.showSC = true;
        mol.chain.twoDcache = null;
      }
    }
    else if (dm == molmil.displayMode_Wireframe) {
      obj.displayMode = 1;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        mol.displayMode = 0;
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 4;
        mol.showSC = true;
        mol.chain.twoDcache = null;
      }
    }
    else if (dm == molmil.displayMode_Wireframe_SC) {
      //obj.displayMode = 1;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        for (a = 0; a < mol.atoms.length; a++) {
          if (mol.xna) mol.atoms[a].displayMode = 4;
          else {
            if (!mol.ligand && !mol.water && !(mol.name == "PRO" && mol.atoms[a].atomName == "N") && backboneAtoms.hasOwnProperty(mol.atoms[a].atomName)) mol.atoms[a].displayMode = 0;
            else mol.atoms[a].displayMode = 4;
          }
        }
        mol.showSC = true;
        mol.chain.twoDcache = null;
      }
    }
    else if (dm == molmil.displayMode_CaTrace) {
      obj.displayMode = 1;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        if (!mol.ligand && !mol.water) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0; }
        mol.displayMode = 1;
        mol.showSC = false;
      }
    }
    else if (dm == molmil.displayMode_Tube) {
      obj.displayMode = 2;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        if ((!mol.ligand && !mol.water) || mol.SNFG) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0; }
        mol.displayMode = 2;
        mol.showSC = false;
      }
    }
    else if (dm == molmil.displayMode_Cartoon) {
      if (obj.displayMode == 3) obj.twoDcache = null;
      obj.displayMode = 3;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        if ((!mol.ligand && !mol.water) || mol.SNFG) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0; }
        mol.displayMode = 3;
        mol.showSC = false;
      }
    }
    else if (dm == molmil.displayMode_CartoonRocket) {
      if (obj.displayMode == 3) obj.twoDcache = null;
      obj.displayMode = 4;
      molmil.geometry.reInitChains = true;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        if (!mol.ligand && !mol.water) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 0; }
        else if (mol.SNFG) { for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].displayMode = 3; }
        mol.displayMode = 31;
        mol.showSC = false;
      }
    }
    else if (dm == molmil.displayMode_ChainSurfaceCG) {
      obj.displayMode = molmil.displayMode_ChainSurfaceCG;
    }
    else if (dm == molmil.displayMode_ChainSurfaceCG + 0.5) {
      obj.displayMode = molmil.displayMode_ChainSurfaceCG;
      obj.HQsurface = true;
    }
    else if (dm == molmil.displayMode_ChainSurfaceSimple) {
      obj.displayMode = molmil.displayMode_ChainSurfaceSimple;
      obj.displaySettings = settings;
    }
  }
  else if (obj instanceof molmil.molObject) {
    if (dm == molmil.displayMode_None) {
      obj.display = false;
      for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].display = false;
    }
    else if (dm == molmil.displayMode_Visible) {
      obj.display = true;
      for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].display = true;
    }
    else if (dm == molmil.displayMode_None) {
      for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 0;
    }
    else if (dm == molmil.displayMode_Default) {
      if (obj.ligand || obj.water) { for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 3; }
      else if (obj.xna) for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 0;
      else { for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 0; }
      obj.displayMode = 3;
      obj.showSC = false;
    }
    else if (dm == molmil.displayMode_Spacefill) {
      for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 1;
      obj.showSC = true;
      obj.chain.twoDcache = null;
    }
    else if (dm == molmil.displayMode_Spacefill_SC) {
      for (a = 0; a < obj.atoms.length; a++) {
        if (obj.xna) obj.atoms[a].displayMode = 1;
        else {
          if (!obj.ligand && !obj.water && backboneAtoms.hasOwnProperty(obj.atoms[a].atomName)) obj.atoms[a].displayMode = 0;
          else obj.atoms[a].displayMode = 1;
        }
      }
      obj.showSC = true;
      obj.chain.twoDcache = null;
    }
    else if (dm == molmil.displayMode_BallStick) {
      for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 2;
      obj.showSC = true;
      obj.chain.twoDcache = null;
    }
    else if (dm == molmil.displayMode_BallStick_SC) {
      for (a = 0; a < obj.atoms.length; a++) {
        if (obj.xna) obj.atoms[a].displayMode = 2;
        else {
          if (!obj.ligand && !obj.water && !(obj.name == "PRO" && obj.atoms[a].atomName == "N") && backboneAtoms.hasOwnProperty(obj.atoms[a].atomName)) obj.atoms[a].displayMode = 0;
          else obj.atoms[a].displayMode = 2;
        }
      }
      obj.showSC = true;
      obj.chain.twoDcache = null;
    }
    else if (dm == molmil.displayMode_Stick) {
      for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 3;
      obj.showSC = true;
      obj.chain.twoDcache = null;
    }
    else if (dm == molmil.displayMode_Stick_SC) {
      for (a = 0; a < obj.atoms.length; a++) {
        if (obj.xna) obj.atoms[a].displayMode = 3;
        else {
          if (!obj.ligand && !obj.water && !(obj.name == "PRO" && obj.atoms[a].atomName == "N") && backboneAtoms.hasOwnProperty(obj.atoms[a].atomName)) obj.atoms[a].displayMode = 0;
          else obj.atoms[a].displayMode = 3;
        }
      }
      obj.showSC = true;
      obj.chain.twoDcache = null;
    }
    else if (dm == molmil.displayMode_Wireframe) {
      for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 4;
      obj.showSC = true;
      obj.chain.twoDcache = null;
    }
    else if (dm == molmil.displayMode_Wireframe_SC) {
      for (a = 0; a < obj.atoms.length; a++) {
        if (obj.xna) obj.atoms[a].displayMode = 4;
        else {
          if (!obj.ligand && !obj.water && !(obj.name == "PRO" && obj.atoms[a].atomName == "N") && backboneAtoms.hasOwnProperty(obj.atoms[a].atomName)) obj.atoms[a].displayMode = 0;
          else obj.atoms[a].displayMode = 4;
        }
      }
      obj.showSC = true;
      obj.chain.twoDcache = null;
    }
    else if (dm == molmil.displayMode_CaTrace) {
      if (!obj.ligand && !obj.water) { for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 0; }
      obj.displayMode = 1;
      obj.showSC = false;
    }
    else if (dm == molmil.displayMode_Tube) {
      if (!obj.ligand && !obj.water) { for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 0; }
      obj.displayMode = 2;
      obj.showSC = false;
    }
    else if (dm == molmil.displayMode_Cartoon) {
      if (!obj.ligand && !obj.water) { for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 0; }
      obj.displayMode = 3;
      obj.showSC = false;
    }
    else if (dm == molmil.displayMode_Cartoon) {
      if (!obj.ligand && !obj.water) { for (a = 0; a < obj.atoms.length; a++) obj.atoms[a].displayMode = 0; }
      obj.displayMode = 31;
      obj.showSC = false;
    }
  }
  else if (obj instanceof molmil.atomObject) {
    if (dm == molmil.displayMode_None) {
      obj.display = false;
    }
    else if (dm == molmil.displayMode_Visible) {
      obj.display = true;
    }
    else if (dm == molmil.displayMode_Spacefill) {
      obj.displayMode = 1;
    }
    else if (dm == molmil.displayMode_BallStick) {
      obj.displayMode = 2;
    }
    else if (dm == molmil.displayMode_Stick) {
      obj.displayMode = 3;
    }
    else if (dm == molmil.displayMode_Wireframe) {
      obj.displayMode = 4;
    }

  }
  else if (obj instanceof molmil.polygonObject) {
    obj.display = dm ? 1 : 0;
    for (m = 0; m < obj.programs.length; m++) obj.programs[m].status = dm ? 1 : 0
    rebuildGeometry = false;
  }

  if (rebuildGeometry) {
    soup.renderer.initBuffers();
    soup.renderer.canvas.update = true;
  }
}

molmil.quickModelColor = function (type, options, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;

  options = options || {};
  var carbonOnly = options.hasOwnProperty("carbonOnly") ? options.carbonOnly : true;

  var applyColor = function (model, color) {
    if (color.length == 3) color = [color[0], color[1], color[2], 255];
    for (c = 0; c < model.chains.length; c++) {
      chain = model.chains[c];
      chain.rgba = color;
      for (m = 0; m < chain.molecules.length; m++) {
        mol = chain.molecules[m];
        mol.rgba = color;
        for (a = 0; a < mol.atoms.length; a++) {
          if (!carbonOnly || mol.atoms[a].element == "C") mol.atoms[a].rgba = color;
        }
      }
    }
  };

  if (type == "blue-red") {
    var list = molmil.interpolateBR(soup.structures.length);
    for (var i = 0; i < list.length; i++) applyColor(soup.structures[i], list[i]);
  }
  else if (type == "chain") {
    var list = molmil.configBox.bu_colors;
    for (var i = 0; i < soup.structures.length; i++) applyColor(soup.structures[i], list[i]);
  }
  else if (type == "newweb-au" || type == "newweb-au-sc") {

    var c, chain, a;
    molmil.displayEntry(soup.structures, molmil.displayMode_Default, false, soup, { newweb: true });
    if (type == "newweb-au-sc") molmil.displayEntry(soup.structures, molmil.displayMode_Stick_SC, false, soup);

    var c, chain, m, mol, a, list;
    for (c = 0; c < soup.chains.length; c++) {
      chain = soup.chains[c];
      if (chain.molecules.length > 1) list = molmil.interpolateBR(chain.molecules.length);
      else list = [[255, 255, 255, 255]];
      for (m = 0; m < chain.molecules.length; m++) {
        mol = chain.molecules[m];
        mol.rgba = list[m];
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, mol.atoms[a].element, molmil.configBox.elementColors.DUMMY);
      }
    }
  }
  else if (type == "cartoon" || type == "cartoon-sc") {
    molmil.displayEntry(soup.structures, molmil.displayMode_Default, false, soup);
    if (type == "cartoon-sc") molmil.displayEntry(soup.structures, molmil.displayMode_Stick_SC, false, soup);
    molmil.colorEntry(soup.structures, molmil.colorEntry_Default, null, false, soup);
  }
  else if (type == "cartoon-chainc" || type == "cartoon-chainc-sc") {
    molmil.displayEntry(soup.structures, molmil.displayMode_Default, false, soup);
    if (type == "cartoon-chainc-sc") molmil.displayEntry(soup.structures, molmil.displayMode_Stick_SC, false, soup);
    molmil.colorEntry(soup.structures, molmil.colorEntry_ChainAlt, { carbonOnly: true }, false, soup);
  }
  else if (type == "sticks" || type == "sticks-chainc" || type == "sticks-bfactor") {
    molmil.displayEntry(soup.structures, molmil.displayMode_Stick, false, soup);
    if (type == "sticks-chainc") molmil.colorEntry(soup.structures, molmil.colorEntry_ChainAlt, { carbonOnly: true }, false, soup);
    else if (type == "sticks-bfactor") {
      var selection = [];
      for (var s = 0; s < soup.structures.length; s++) {
        var obj = soup.structures[s];
        for (c = 0; c < obj.chains.length; c++) {
          chain = obj.chains[c];
          for (a = 0; a < chain.atoms.length; a++) selection.push(chain.atoms[a]);
        }
      }
      molmil.colorBfactor(selection, soup);
    }
    else molmil.colorEntry(soup.structures, molmil.colorEntry_CPK, null, false, soup);
  }
  else if (type == "lines" || type == "lines-chainc") {
    molmil.displayEntry(soup.structures, molmil.displayMode_Wireframe, false, soup);
    if (type == "lines-chainc") molmil.colorEntry(soup.structures, molmil.colorEntry_ChainAlt, { carbonOnly: true }, false, soup);
    else molmil.colorEntry(soup.structures, molmil.colorEntry_CPK, null, false, soup);
  }
  else if (type == "neutral") {
    molmil.displayEntry(soup.structures, molmil.displayMode_Default, false, soup);
    molmil.colorEntry(soup.structures, molmil.colorEntry_CPK, null, false, soup);
    molmil.colorEntry(soup.structures, molmil.colorEntry_Custom + 0.5, { rgba: [255, 255, 255, 255], carbonOnly: true }, false, soup);
  }

  soup.renderer.rebuildRequired = true;
};

// ** change color mode of a system/chain/molecule/atom **
molmil.colorEntry = function (obj, cm, setting, rebuildGeometry, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  if (obj instanceof Array) {
    for (var i = 0; i < obj.length; i++) molmil.colorEntry(obj[i], cm, setting, null, soup);
    if (rebuildGeometry) {
      soup.renderer.initBuffers();
      soup.renderer.canvas.update = true;
    }
    return;
  }

  var m, a, c, chain, mol, c, chain, list;
  if (obj instanceof molmil.entryObject) {
    if (cm == molmil.colorEntry_Default || cm == molmil.colorEntry_Default + .5) { // default
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.rgba = [255, 255, 255, 255];
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          if (cm == molmil.colorEntry_Default) mol.rgba = molmil_dep.getKeyFromObject(molmil.configBox.sndStrucColor, mol.sndStruc, molmil.configBox.sndStrucColor[1]);
          for (a = 0; a < mol.atoms.length; a++) {
            mol.atoms[a].rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, mol.atoms[a].element, molmil.configBox.elementColors.DUMMY);
          }
        }
      }
    }
    else if (cm == molmil.colorEntry_Structure) { // structure
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          mol.rgba = molmil_dep.getKeyFromObject(molmil.configBox.sndStrucColor, mol.sndStruc, molmil.configBox.sndStrucColor[1]);
          for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = mol.rgba;
        }
      }
    }
    else if (cm == molmil.colorEntry_CPK || cm == molmil.colorEntry_CPK + .5) { // atom (cpk)
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, mol.atoms[a].element, molmil.configBox.elementColors.DUMMY);
          if (cm == molmil.colorEntry_CPK) mol.rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, "C", molmil.configBox.elementColors.DUMMY);
        }
      }
    }
    else if (cm == molmil.colorEntry_Group) { // group
      list = [];
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        if (chain.molecules.length > 1) list = molmil.interpolateBR(chain.molecules.length);
        else list = [[0, 0, 255, 255]];
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          mol.rgba = list[m];
          for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = list[m];
        }
      }
    }
    else if (cm == molmil.colorEntry_Chain) { // chain
      list = molmil.interpolateBR(obj.chains.length);
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.rgba = list[c];
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          mol.rgba = list[c];
          for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = list[c];
        }
      }
    }
    else if (cm == molmil.colorEntry_Custom || cm == molmil.colorEntry_Custom + .5) { // custom
      if (!molmil_dep.isObject(setting)) setting = { rgba: setting };
      var rgba = setting.rgba;
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.rgba = rgba;
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          if (cm == molmil.colorEntry_Custom) mol.rgba = rgba;
          for (a = 0; a < mol.atoms.length; a++) if (!setting.carbonOnly || mol.atoms[a].element == "C") mol.atoms[a].rgba = rgba;
        }
      }
    }
    else if (cm == molmil.colorEntry_ChainAlt) {
      if (!molmil_dep.isObject(setting)) setting = {};
      list = molmil.configBox.bu_colors;
      var j = 0;
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.rgba = [list[j][0], list[j][1], list[j][2], 255]; j++
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          mol.rgba = obj.chains[c].rgba;
          for (a = 0; a < mol.atoms.length; a++) if (!setting.carbonOnly || mol.atoms[a].element == "C") mol.atoms[a].rgba = obj.chains[c].rgba;
        }
        if (j >= list.length) j = 0;
      }
    }
    else if (cm == molmil.colorEntry_Entity) {
      if (!molmil_dep.isObject(setting)) setting = {};

      var tmp = new Set();
      for (c = 0; c < obj.chains.length; c++) tmp.add(obj.chains[c].entity_id);
      var entity2colors = molmil.interpolateHsl(tmp.size + 1, 0, 360);
      var emap = {};

      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        if (emap[chain.entity_id] === undefined) emap[chain.entity_id] = entity2colors.shift(0);
        chain.rgba = [emap[chain.entity_id][0], emap[chain.entity_id][1], emap[chain.entity_id][2], 255];
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          mol.rgba = obj.chains[c].rgba;
          for (a = 0; a < mol.atoms.length; a++) if (!setting.carbonOnly || mol.atoms[a].element == "C") mol.atoms[a].rgba = obj.chains[c].rgba;
        }
      }
    }
    else if (cm == molmil.colorEntry_ABEGO) {
      for (c = 0; c < obj.chains.length; c++) {
        chain = obj.chains[c];
        chain.rgba = [255, 255, 255, 255];
        if (chain.isHet) continue;
        if (chain.molecules[0].phiAngle == undefined) molmil.calculateBBTorsions(chain, soup);
        for (m = 0; m < chain.molecules.length; m++) {
          mol = chain.molecules[m];
          mol.rgba = [255, 255, 255, 255];
          if (mol.omegaAngle < 45 && mol.omegaAngle > -45) mol.rgba = [128, 128, 128, 255]; // grey
          else if (mol.phiAngle < 0) {
            if (mol.psiAngle > 50 || mol.psiAngle < -75) mol.rgba = [0, 0, 255, 255]; // blue
            else mol.rgba = [255, 0, 0, 255]; // red
          }
          else {
            if (mol.psiAngle > 100 || mol.psiAngle < -100) mol.rgba = [255, 255, 0, 255]; // yellow
            else mol.rgba = [0, 255, 0, 255]; // green
          }
          for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = mol.rgba;
        }
      }
    }
  }
  else if (obj instanceof molmil.chainObject) {
    if (cm == molmil.colorEntry_Default || cm == molmil.colorEntry_Default + .5) { // default
      obj.rgba = [255, 255, 255, 255];
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        if (cm == molmil.colorEntry_Default) mol.rgba = molmil_dep.getKeyFromObject(molmil.configBox.sndStrucColor, mol.sndStruc, molmil.configBox.sndStrucColor[1]);
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, mol.atoms[a].element, molmil.configBox.elementColors.DUMMY);
      }
    }
    else if (cm == molmil.colorEntry_Structure) { // structure
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        mol.rgba = molmil_dep.getKeyFromObject(molmil.configBox.sndStrucColor, mol.sndStruc, molmil.configBox.sndStrucColor[1]);
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = mol.rgba;
      }
    }
    else if (cm == molmil.colorEntry_CPK || cm == molmil.colorEntry_CPK + .5) { // atom (cpk)
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, mol.atoms[a].element, molmil.configBox.elementColors.DUMMY);
        if (cm == molmil.colorEntry_CPK) mol.rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, "C", molmil.configBox.elementColors.DUMMY);
      }
    }
    else if (cm == molmil.colorEntry_Group) { // group
      list = [];
      chain = obj;
      if (chain.molecules.length > 1) list = molmil.interpolateBR(chain.molecules.length);
      else list = [[1, 1, 1]];
      for (m = 0; m < chain.molecules.length; m++) {
        mol = chain.molecules[m];
        mol.rgba = list[m];
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = list[m];
      }
    }
    else if (cm == molmil.colorEntry_Custom || cm == molmil.colorEntry_Custom + .5) { // custom
      if (!molmil_dep.isObject(setting)) setting = { rgba: setting };
      var rgba = setting.rgba;
      obj.rgba = rgba;
      for (m = 0; m < obj.molecules.length; m++) {
        mol = obj.molecules[m];
        if (cm == molmil.colorEntry_Custom) mol.rgba = setting.rgba;
        for (a = 0; a < mol.atoms.length; a++) if (!setting.carbonOnly || mol.atoms[a].element == "C") mol.atoms[a].rgba = setting.rgba;
      }
    }
    else if (cm == molmil.colorEntry_ABEGO && !obj.isHet) {
      chain = obj;
      chain.rgba = [255, 255, 255, 255];
      if (chain.molecules[0].phiAngle == undefined) molmil.calculateBBTorsions(chain, soup);
      for (m = 0; m < chain.molecules.length; m++) {
        mol = chain.molecules[m];
        mol.rgba = [255, 255, 255, 255];
        if (mol.omegaAngle < 45 && mol.omegaAngle > -45) mol.rgba = [128, 128, 128, 255]; // grey
        else if (mol.phiAngle < 0) {
          if (mol.psiAngle > 50 || mol.psiAngle < -75) mol.rgba = [0, 0, 255, 255]; // blue
          else mol.rgba = [255, 0, 0, 255]; // red
        }
        else {
          if (mol.psiAngle > 100 || mol.psiAngle < -100) mol.rgba = [255, 255, 0, 255]; // yellow
          else mol.rgba = [0, 255, 0, 255]; // green
        }
        for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = mol.rgba;
      }
    }
  }
  else if (obj instanceof molmil.molObject) {
    if (cm == molmil.colorEntry_Default || cm == molmil.colorEntry_Default + .5) { // default
      mol = obj;
      if (cm == molmil.colorEntry_Default || cm == molmil.colorEntry_Default + .25) mol.rgba = molmil_dep.getKeyFromObject(molmil.configBox.sndStrucColor, mol.sndStruc, molmil.configBox.sndStrucColor[1]);
      if (cm != molmil.colorEntry_Default + .25) for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, mol.atoms[a].element, molmil.configBox.elementColors.DUMMY);
    }
    else if (cm == molmil.colorEntry_Structure || cm == molmil.colorEntry_Structure + .5) { // structure
      mol = obj;
      if (cm == molmil.colorEntry_Structure) mol.rgba = molmil_dep.getKeyFromObject(molmil.configBox.sndStrucColor, mol.sndStruc, molmil.configBox.sndStrucColor[1]);
      for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = mol.rgba;
    }
    else if (cm == molmil.colorEntry_CPK || cm == molmil.colorEntry_CPK + .5 || cm == 3.2) { // atom (cpk)
      mol = obj;
      for (a = 0; a < mol.atoms.length; a++) mol.atoms[a].rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, mol.atoms[a].element, molmil.configBox.elementColors.DUMMY);
      if (cm == molmil.colorEntry_CPK) mol.rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, "C", molmil.configBox.elementColors.DUMMY);
    }
    else if (cm == molmil.colorEntry_Custom || cm == molmil.colorEntry_Custom + .5) { // custom
      if (!molmil_dep.isObject(setting)) setting = { rgba: setting };
      var rgba = setting.rgba;
      if (cm == molmil.colorEntry_Custom) obj.rgba = setting.rgba;
      for (a = 0; a < obj.atoms.length; a++) if (!setting.carbonOnly || obj.atoms[a].element == "C") obj.atoms[a].rgba = setting.rgba;
    }
  }
  else if (obj instanceof molmil.atomObject) {
    if (cm == molmil.colorEntry_Default || cm == molmil.colorEntry_CPK) { // default or atom (cpk)
      obj.rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, obj.element, molmil.configBox.elementColors.DUMMY);
    }
    else if (cm == molmil.colorEntry_Structure) { // structure
      mol = obj.molecule;
      obj.rgba = molmil_dep.getKeyFromObject(molmil.configBox.sndStrucColor, mol.sndStruc, molmil.configBox.sndStrucColor[1]);
    }
    else if (cm == molmil.colorEntry_Custom) { // custom
      obj.rgba = setting;
    }
  }
  else if (obj instanceof molmil.polygonObject) {
  }
  else { return; }
  if (rebuildGeometry) {
    soup.renderer.initBuffers();
    soup.renderer.canvas.update = true;
  }
}


// ** misc functions **

molmil.getAtomFromMolecule = function (molecule, atomName) {
  for (var a = 0; a < molecule.atoms.length; a++) if (molecule.atoms[a].atomName == atomName) return molecule.atoms[a];
  return null;
}

molmil.resetColors = function (struc, soup) {
  if (soup) struc.soup = soup;
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  for (var m = 0, a, c, M, chain; m < soup.structures.length; m++) {
    if (struc && soup.structures[m] != struc) continue;
    if (!soup.structures[m].chains) continue;
    for (c = 0; c < soup.structures[m].chains.length; c++) {
      chain = soup.structures[m].chains[c];
      for (a = 0; a < chain.atoms.length; a++) chain.atoms[a].rgba = molmil_dep.getKeyFromObject(molmil.configBox.elementColors, chain.atoms[a].element, molmil.configBox.elementColors.DUMMY);
      for (M = 0; M < chain.molecules.length; M++) chain.molecules[M].rgba = molmil_dep.getKeyFromObject(molmil.configBox.sndStrucColor, chain.molecules[M].sndStruc, molmil.configBox.sndStrucColor[1]);
    }
  }
};

molmil.fetchFrom = function (obj, what) {
  var out = [], i;
  if (obj instanceof Array) {
    for (i = 0; i < obj.length; i++) out = out.concat(molmil.getProteinChains(obj[i], what));
  }
  else if (obj instanceof molmil.atomObject) {
    if (what == molmil.molObject) out.push(obj.molecule);
    else if (what == molmil.chainObject) out.push(obj.chain);
    else if (what == molmil.entryObject) out.push(obj.chain.entry);
  }
  else if (obj instanceof molmil.molObject) {
    if (what == molmil.atomObject) out = out.concat(obj.atoms);
    else if (what == molmil.chainObject) out.push(obj.chain);
    else if (what == molmil.entryObject) out.push(obj.chain.entry);
  }
  else if (obj instanceof molmil.chainObject) {
    if (what == molmil.atomObject) out = out.concat(obj.atoms);
    else if (what == molmil.molObject) out = out.concat(obj.molecules);
    else if (what == molmil.entryObject) out.push(obj.entry);
  }
  else if (obj instanceof molmil.entryObject) {
    if (what == molmil.atomObject) {
      for (i = 0; i < obj.chains.length; i++) out = out.concat(obj.atoms[i]);
    }
    else if (what == molmil.molObject) {
      for (i = 0; i < obj.chains.length; i++) out = out.concat(obj.molecules[i]);
    }
    else if (what == molmil.chainObject) out = out.concat(obj.chains);
  }
  return out.unique();
};

molmil.getProteinChains = function (obj) {
  var out = [];
  if (obj instanceof Array) {
    for (var i = 0; i < obj.length; i++) out = out.concat(molmil.getProteinChains(obj[i]));
  }
  else if (obj instanceof molmil.entryObject) {
    for (var c = 0; c < obj.chains.length; c++) { if (!obj.chains[c].isHet && obj.chains[c].molecules.length && !obj.chains[c].molecules[0].water) out.push(obj.chains[c]); }
  }
  else if (obj instanceof molmil.chainObject) {
    if (!obj.isHet && obj.molecules.length && !obj.molecules[0].water) out.push(obj);
  }
  return out
}

molmil.getResiduesForChain = function (chain, first, last) {
  var out = [];
  for (var m = 0; m < chain.molecules.length; m++) {
    if (chain.molecules[m].RSID >= first && chain.molecules[m].RSID <= last) out.push(chain.molecules[m]);
  }
  return out;
}

molmil.autoGetAtoms = function (array) {
  var atomList = [];
  if (!array instanceof Array) array = [array];
  if (array.length == 0) return [];

  if (array[0] instanceof molmil.entryObject) {
    var i, c;
    for (i = 0; i < array.length; i++) {
      for (c = 0; c < array[i].chains.length; i++) atomList = atomList.concat(array[i].chains.atoms);
    }
  }
  else if (array[0] instanceof molmil.chainObject || array[0] instanceof molmil.molObject) {
    for (var i = 0; i < array.length; i++) atomList = atomList.concat(array[i].atoms);
  }
  return atomList;
}


molmil.setCanvas = function (soupObject, canvas) {
  soupObject.canvas = canvas;
  if (!canvas.renderer) {
    soupObject.renderer = canvas.renderer = new molmil.render(soupObject);
  }
}

molmil.initTexture = function (src, gl) { // maybe deprecated
  var texture = gl.createTexture(); texture.image = new Image(); texture.image.texture = texture;
  texture.loaded = false;
  texture.image.onload = function () { molmil.handleLoadedTexture(this.texture, gl) }
  texture.image.src = src;
  return texture;
}

molmil.handleLoadedTexture = function (texture, gl) {
  gl.bindTexture(gl.TEXTURE_2D, texture);
  //gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true); // ?? needed???????????
  //gl.pixelStorei(gl.UNPACK_FLIP_X_WEBGL, true); // ?? needed???????????
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
  gl.bindTexture(gl.TEXTURE_2D, null);
  texture.loaded = true;
}

molmil.resetAttributes = function (gl) {
  for (var e in gl.boundAttributes) if (gl.boundAttributes[e] != 0) gl.boundAttributes[e] = -1;
}

molmil.bindAttribute = function (gl, index, size, type, normalized, stride, offset) {
  if (!gl.boundAttributes[index]) { gl.enableVertexAttribArray(index); gl.boundAttributes[index] = 1; }
  else if (gl.boundAttributes[index] == -1) gl.boundAttributes[index] = 1;
  gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
}

molmil.clearAttributes = function (gl) {
  for (var e in gl.boundAttributes) if (gl.boundAttributes[e] == -1) { gl.disableVertexAttribArray(e); gl.boundAttributes[e] = 0; }
}


// ** waits until all requirements are loaded, then starts the renderer **
molmil.safeStartViewer = function (canvas) {
  if (!canvas.renderer.camera.z_set) {
    canvas.renderer.camera.z = canvas.molmilViewer.calcZ();
    canvas.renderer.camera.z_set = true;
  }
  if (canvas.initialized) return;
  for (var t in canvas.renderer.textures) {
    if (!canvas.renderer.textures[t].loaded) return molmil_dep.asyncStart(molmil.safeStartViewer, [canvas], null, 100);
  }
  canvas.renderer.resizeViewPort();
  canvas.initialized = true;
  if (document.body.classList !== undefined) document.body.classList.add("entryLoaded");
}

molmil.animate_molmilViewers = function () {
  if (molmil.vrDisplay) molmil.settings.animationFrameID = molmil.vrDisplay.requestAnimationFrame(molmil.animate_molmilViewers);
  else molmil.settings.animationFrameID = requestAnimationFrame(molmil.animate_molmilViewers);
  if (!molmil.settings.recordingMode) {
    for (var i = 0; i < molmil.preRenderFuncs.length; i++) molmil.preRenderFuncs[i]();
    for (var c = 0; c < molmil.canvasList.length; c++) molmil.canvasList[c].renderer.render();
  }
}


molmil.unproject = function (dx, dy, cz, mat) {
  dx = 2 * dx - 1;
  dy = 2 * dy - 1;
  cz = 2 * cz - 1;
  var n = [dx, dy, cz, 1];
  vec4.transformMat4(n, n, mat);
  n[3] = 1 / n[3];
  return [n[0] * n[3], n[1] * n[3], n[2] * n[3]];
}

// ** hermite interpolation for geometry **
molmil.hermiteInterpolate = function (a1, a2, T1, T2, nop, line, tangents, post2) {
  "use strict";
  var t, s, s2, s3, h1, h2, h3, h4, tmp;
  for (t = 0; t < (nop + (post2 ? 2 : 1)); t += 1) {
    s = t / (nop + 1); s2 = s * s; s3 = s2 * s;
    h1 = 2 * s3 - 3 * s2 + 1; h2 = -2 * s3 + 3 * s2; h3 = s3 - 2 * s2 + s; h4 = s3 - s2;
    line.push([(a1[0] * h1) + (a2[0] * h2) + (T1[0] * h3) + (T2[0] * h4), (a1[1] * h1) + (a2[1] * h2) + (T1[1] * h3) + (T2[1] * h4), (a1[2] * h1) + (a2[2] * h2) + (T1[2] * h3) + (T2[2] * h4)]);
  }

  for (t = 0; t < (nop + (post2 ? 2 : 1)); t += 1) {
    s = t / (nop + 1); s2 = s * s;
    h1 = 6 * (s2 - s);
    h2 = 6 * (-s2 + s);
    h3 = 3 * s2 - 4 * s + 1;
    h4 = 3 * s2 - 2 * s;
    tmp = [(a1[0] * h1) + (a2[0] * h2) + (T1[0] * h3) + (T2[0] * h4), (a1[1] * h1) + (a2[1] * h2) + (T1[1] * h3) + (T2[1] * h4), (a1[2] * h1) + (a2[2] * h2) + (T1[2] * h3) + (T2[2] * h4)];
    vec3.normalize(tmp, tmp);
    tangents.push(tmp);
  }
}

// ** builds a octahedron sphere **
molmil.octaSphereBuilder = function (recursionLevel) {
  var vertices = [], faces = [], index = 0, i, f, faces2, a, b, c, t, addVertex, length, getCenterPoint, centerPointIndex = {};
  addVertex = function (x, y, z) {
    length = Math.sqrt(x * x + y * y + z * z);
    vertices.push([x / length, y / length, z / length]);
    return index++;
  };
  getCenterPoint = function (v1, v2) {
    var firstIsSmaller = v1 < v2, smallerIndex, greaterIndex, key, ret;
    smallerIndex = firstIsSmaller ? v1 : v2;
    greaterIndex = firstIsSmaller ? v2 : v1;
    key = [smallerIndex, greaterIndex];

    ret = molmil_dep.getKeyFromObject(centerPointIndex, key, null);
    if (ret != null) return ret;


    var vert1 = vertices[v1];
    var vert2 = vertices[v2];

    var i = addVertex((vert1[0] + vert2[0]) * .5, (vert1[1] + vert2[1]) * .5, (vert1[2] + vert2[2]) * .5);
    centerPointIndex[key] = i;
    return i;

  };
  addVertex(-1, 1, 0); addVertex(1, 1, 0); addVertex(1, -1, 0); addVertex(-1, -1, 0); addVertex(0, 0, -1); addVertex(0, 0, 1);
  faces.push([0, 1, 4]); faces.push([1, 2, 4]); faces.push([2, 3, 4]); faces.push([3, 0, 4]);
  faces.push([5, 1, 0]); faces.push([5, 2, 1]); faces.push([5, 3, 2]); faces.push([5, 0, 3]);

  for (i = 0; i < recursionLevel; i++) {
    faces2 = [];
    for (f = 0; f < faces.length; f++) {
      a = getCenterPoint(faces[f][0], faces[f][1]);
      b = getCenterPoint(faces[f][1], faces[f][2]);
      c = getCenterPoint(faces[f][2], faces[f][0]);
      faces2.push([faces[f][0], a, c]);
      faces2.push([faces[f][1], b, a]);
      faces2.push([faces[f][2], c, b]);
      faces2.push([a, b, c]);
    }
    faces = faces2;
  }
  return { vertices: vertices, faces: faces };
}

// ** builds half a octahedron sphere **
molmil.buildOctaDome = function (t, side) {
  var sphere = molmil.octaSphereBuilder(t), dx, dy, dz, d, mfd = [], j, k;
  for (var i = 0; i < sphere.vertices.length; i++) {
    dx = sphere.vertices[4][0] - sphere.vertices[i][0];
    dy = sphere.vertices[4][1] - sphere.vertices[i][1];
    dz = sphere.vertices[4][2] - sphere.vertices[i][2];
    d = dx * dx + dy * dy + dz * dz;
    if ((side == 0 && d > 2.00001) || (side == 1 && d < 1.99999)) mfd.push(i);
  }
  for (var i = mfd.length - 1; i > -1; i--) sphere.vertices.splice(mfd[i], 1);
  for (i = 0; i < sphere.faces.length; i++) {
    if (mfd.indexOf(sphere.faces[i][0]) != -1 || mfd.indexOf(sphere.faces[i][1]) != -1 || mfd.indexOf(sphere.faces[i][2]) != -1) {
      sphere.faces.splice(i, 1);
      i -= 1;
    }
    else {
      for (j = 0; j < sphere.faces[i].length; j++) { for (k = mfd.length - 1; k > -1; k--) { if (sphere.faces[i][j] > mfd[k]) sphere.faces[i][j] -= 1; } }
    }
  }
  return sphere;
}

// ** buils a list of bonds for a molecule/residue **
molmil.buildBondsList4Molecule = function (bonds, molecule, xyzRef) {
  var cbMat = (molecule.chain.entry.cbMat || {})[molecule.name] || null;
  if (cbMat == null) {
    var dx, dy, dz, r, a1, a2, xyz1, xyz2, vdwR = molmil.configBox.vdwR, maxDistance;
    for (a1 = 0; a1 < molecule.atoms.length; a1++) {
      for (a2 = a1 + 1; a2 < molecule.atoms.length; a2++) {
        if (molecule.atoms[a1].label_alt_id != molecule.atoms[a2].label_alt_id && molecule.atoms[a1].label_alt_id != null && molecule.atoms[a2].label_alt_id != null) continue;
        xyz1 = molecule.atoms[a1].xyz;
        xyz2 = molecule.atoms[a2].xyz;
        dx = xyzRef[xyz1] - xyzRef[xyz2]; dx *= dx;
        dy = xyzRef[xyz1 + 1] - xyzRef[xyz2 + 1]; dy *= dy;
        dz = xyzRef[xyz1 + 2] - xyzRef[xyz2 + 2]; dz *= dz;
        r = dx + dy + dz;

        maxDistance = molmil.configBox.connect_cutoff;
        maxDistance += ((vdwR[molecule.atoms[a1].element] || 1.8) + (vdwR[molecule.atoms[a2].element] || 1.8)) * .5;
        if (molecule.atoms[a1].element == "H" || molecule.atoms[a2].element == "H") maxDistance -= .2;
        maxDistance *= maxDistance;
        if (r <= maxDistance) bonds.push([molecule.atoms[a1], molecule.atoms[a2], 1]);
      }
    }
  }
  else {
    var order;
    for (a1 = 0; a1 < molecule.atoms.length; a1++) {
      for (a2 = a1 + 1; a2 < molecule.atoms.length; a2++) {
        order = cbMat[molecule.atoms[a1].atomName + "_" + molecule.atoms[a2].atomName];
        if (order !== undefined) bonds.push([molecule.atoms[a1], molecule.atoms[a2], order]);
      }
    }
  }
}

// ** osx 10.6 is unstable **
molmil.isBlackListed = function () {
  if (molmil.ignoreBlackList) return false;
  if (navigator.userAgent.indexOf("Mac OS X 10.6") != -1) return true;
  else if (navigator.userAgent.indexOf("Mac OS X 10_6") != -1) return true;
  return false;
}

molmil.addEnableMolmilButton = function (canvas) {
  canvas.renderer = canvas.molmilViewer.renderer;
  var div = molmil_dep.dcE("DIV");
  var button = div.pushNode(molmil_dep.createButton("Enable")); // implement in molmil_dep
  canvas.style.display = "none";
  canvas.parentNode.pushNode(div);
  button.onclick = function () { molmil.ignoreBlackList = true; molmil_dep.reloadPage(); };
  return div;
}

// ** initializes a viewer object (quick function) **
molmil.createViewer = function (target, width, height, soupObject) {
  var canvas;
  var dpr = window.devicePixelRatio || 1;
  if (target.tagName.toLowerCase() == "canvas") canvas = target;
  else canvas = target.pushNode("canvas");
  width = width || canvas.width; height = height || canvas.height;
  if (width == 300 && height == 150 && !(canvas.style.width || canvas.style.height)) { // full-window sized canvas, with auto-resize
    width = window.innerWidth || document.documentElement.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight;
    window.onresize = function () {
      var dpr = devicePixelRatio || 1;
      if (molmil.configBox.stereoMode != 3) {
        var width = window.innerWidth || document.documentElement.clientWidth, height = window.innerHeight || document.documentElement.clientHeight;
        canvas.width = width * dpr; canvas.height = height * dpr;
        canvas.style.width = width + "px"; canvas.style.height = height + "px";
        canvas.renderer.resizeViewPort();
      }
      canvas.update = true;
    };
  }

  canvas.style.width = width + "px"; canvas.style.height = height + "px";
  canvas.width = width * dpr; canvas.height = height * dpr; canvas.defaultSize = [width, height];

  canvas.setSize = function (w, h) {
    var dpr = window.devicePixelRatio || 1;
    this.renderer.width = this.width = w;// * dpr;
    this.renderer.height = this.height = h;// * dpr;
    this.style.width = (w / dpr) + "px";
    this.style.height = (h / dpr) + "px";
    this.renderer.resizeViewPort(); this.update = true; this.renderer.render();
    if (window.local_file_saver !== undefined) window.resizeTo(w + (window.outerWidth - window.innerWidth), h + (window.outerHeight - window.innerHeight)); // molmil-app
  };

  if (soupObject) {
    canvas.molmilViewer = soupObject;
    molmil.setCanvas(soupObject, canvas);
    canvas.molmilViewer.renderer.camera = canvas.molmilViewer.defaultCanvas[1].camera;
    canvas.molmilViewer.renderer.QLV = canvas.molmilViewer.defaultCanvas[1].QLV;
  }
  else {
    canvas.molmilViewer = new molmil.viewer(canvas);
    if (molmil.isBlackListed()) { return molmil.addEnableMolmilButton(canvas); }
  }

  canvas.inputFunctions = [];

  molmil.cli_canvas = canvas; molmil.cli_soup = canvas.molmilViewer; // set some default stuff to make life easier

  if (!canvas.molmilViewer.renderer.initGL(canvas)) return canvas.molmilViewer.renderer.altCanvas;

  canvas.molmilViewer.renderer.initRenderer();
  if (soupObject) {
    canvas.renderer.initBuffers();
    canvas.update = true;
    molmil.safeStartViewer(canvas);
  }

  molmil.canvasList.push(canvas);

  return canvas;
}

molmil.selectQLV = function (renderer, QLV, rebuildGeometry) {
  QLV = Math.min(Math.max(QLV, 0), molmil.configBox.QLV_SETTINGS.length - 1);
  if (molmil.configBox.liteMode) QLV = 1;
  renderer.QLV = QLV;
  if (rebuildGeometry) {
    renderer.initBuffers();
    renderer.canvas.update = true;
  }
}

molmil.interpolateHsl = function (length, startH, endH) {
  startH /= 360; endH /= 360;
  var list = [], tmp;
  if (length == 1) {
    tmp = molmil.hslToRgb123(startH, 1.0, 0.5);
    list.push([tmp[0] * 255, tmp[1] * 255, tmp[2] * 255, 255]);
  }
  else {
    var deltaH = (endH - startH) / (length - 1);
    for (var i = 0; i < length; i++) {
      tmp = molmil.hslToRgb123(startH + (deltaH * i), 1.0, 0.5);
      list.push([tmp[0] * 255, tmp[1] * 255, tmp[2] * 255, 255]);
    }
  }
  return list;
}

// ** generates a smooth interpolation between blue and red **
molmil.interpolateBR = function (length) { return molmil.interpolateHsl(length, molmil.configBox.groupColorFirstH, molmil.configBox.groupColorLastH); }

molmil.resetCOG = function (canvas, recalc) {
  if (recalc) canvas.molmilViewer.calculateCOG();
  canvas.molmilViewer.avgXYZ = [canvas.molmilViewer.avgX, canvas.molmilViewer.avgY, canvas.molmilViewer.avgZ];
  canvas.molmilViewer.stdXYZ = [canvas.molmilViewer.stdX, canvas.molmilViewer.stdY, canvas.molmilViewer.stdZ]; // don't know yet how to calculate this one...

  canvas.molmilViewer.COR = canvas.molmilViewer.avgXYZ;
  //canvas.renderer.camera.z = -Math.pow(canvas.molmilViewer.stdXYZ[0]+canvas.molmilViewer.stdXYZ[1], 1.25)-((canvas.molmilViewer.stdXYZ[0]+canvas.molmilViewer.stdXYZ[1])*5)-12;
  canvas.renderer.camera.z = canvas.molmilViewer.calcZ();
}

// ** quick-load functions **

molmil.loadFile = function (loc, format, cb, async, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  soup.loadStructure(loc, format, cb || function (target, struc) {
    molmil.displayEntry(struc, 1);
    molmil.colorEntry(struc, 1, null, true, soup);
  }, { async: async ? true : false });
};

molmil.loadPDBlite = function (pdbid, cb, async, soup) {
  molmil.configBox.liteMode = true;
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;

  var requestA = new molmil_dep.CallRemote("GET"), async = true; requestA.ASYNC = async;
  requestA.OnDone = function () { this.atom_data = JSON.parse(this.request.responseText); }
  requestA.OnError = function () {
    this.error = true;
    soup.loadStructure(molmil.settings.pdb_url.replace("__ID__", pdbid), 1, cb || function (target, struc) {
      struc.meta.pdbid = pdbid;
      delete target.pdbxData;
      molmil.displayEntry(struc, molmil.displayMode_Default);
      molmil.displayEntry(struc, molmil.displayMode_CartoonRocket);
      molmil.colorEntry(struc, 1, null, true, soup);
    }, { async: async ? true : false });


  };
  requestA.Send(molmil.settings.pdb_url.replace("format=mmjson-all", "format=mmjson-lite").replace("__ID__", pdbid));
  var requestB = new molmil_dep.CallRemote("GET"), async = true; requestB.ASYNC = async; requestB.target = this; requestB.requestA = requestA;
  requestB.OnDone = function () {
    if (this.requestA.error) return;
    if (!this.requestA.atom_data) return molmil_dep.asyncStart(this.OnDone, [], this, 100);
    var jso = JSON.parse(this.request.responseText);
    jso["data_" + pdbid.toUpperCase()]["atom_site"] = this.requestA.atom_data["data_" + pdbid.toUpperCase()]["atom_site"];
    soup.loadStructureData(jso, "mmjson", pdbid + ".json", cb || function (target, struc) { // later switch this to use the new lite mmjson files...
      struc.meta.pdbid = pdbid;
      delete target.pdbxData;
      molmil.displayEntry(struc, molmil.displayMode_Default);
      molmil.displayEntry(struc, molmil.displayMode_CartoonRocket);
      molmil.colorEntry(struc, 1, null, true, soup);
    });
  };
  requestB.Send(molmil.settings.pdb_url.replace("__ID__", pdbid).replace("format=mmjson-all", "format=mmjson-plus-noatom"));
};

molmil.loadPDB = function (pdbid, cb, async, soup) {
  var tmp = molmil.configBox.skipComplexBondSearch;
  molmil.configBox.skipComplexBondSearch = true;
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  soup.loadStructure(molmil.settings.pdb_url.replace("__ID__", pdbid.toLowerCase()), 1, cb || function (target, struc) {
    struc.meta.pdbid = pdbid;
    if (soup.AID > 1e5 || (soup.AID > 150000 && (navigator.userAgent.toLowerCase().indexOf("mobile") != -1 || navigator.userAgent.toLowerCase().indexOf("android") != -1 || window.navigator.msMaxTouchPoints))) molmil.displayEntry(struc, molmil.displayMode_Wireframe);
    else molmil.displayEntry(struc, 1);
    molmil.colorEntry(struc, 1, null, true, soup);
    molmil.configBox.skipComplexBondSearch = tmp;
  }, { async: async ? true : false });
};

molmil.loadCC = function (comp_id, cb, async, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  soup.loadStructure(molmil.settings.comp_url.replace("__ID__", comp_id.toUpperCase()), 1, cb || function (target, struc) {
    struc.meta.comp_id = comp_id;
    molmil.displayEntry(struc, 1);
    molmil.colorEntry(struc, 1, null, true, soup);
  }, { async: async ? true : false });
};

molmil.loadPDBchain = function (pdbid, cb, async, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  soup.loadStructure(molmil.settings.pdb_chain_url.replace("__ID__", pdbid), 1, cb || function (target, struc) {
    if (soup.AID > 1e5 || (soup.AID > 150000 && (navigator.userAgent.toLowerCase().indexOf("mobile") != -1 || navigator.userAgent.toLowerCase().indexOf("android") != -1 || window.navigator.msMaxTouchPoints))) molmil.displayEntry(struc, molmil.displayMode_Wireframe);
    else molmil.displayEntry(struc, 1);
    molmil.colorEntry(struc, 1, null, true, soup);
  }, { async: async ? true : false });
};

// ** resets molmil (empties the system) **
molmil.clear = function (canvas) {
  canvas = canvas || molmil.cli_canvas;
  canvas.molmilViewer.clear();
  canvas.renderer.initBuffers();
  canvas.renderer.camera.reset();
  canvas.update = true;
  if (document.body.classList !== undefined) document.body.classList.remove("entryLoaded");
};

molmil.tubeSurface = function (chains, settings, soup) { // volumetric doesn't draw simple tubes, it adds volume (radii at different positions along the tube) to the tube
  return molmil.loadPlugin(molmil.settings.src + "plugins/misc.js", this.tubeSurface, this, [chains, settings, soup]);
}

// use an alternate way of generating the isosurface...
// 1) use a coarse grid (e.g. 4x lower density) to calculate the nearest point on the isosurface (vdw+probeR)
// 2) throw away everything that wasn't mapped
// 3) use a hq grid to calculate the sasa (previous isosurface-probeR)

//molmil.coarseSurface = function(chain, res, probeR) {
//  
//}

// ** generates a coarse surface for a chain **
molmil.coarseSurface = function (chain, res, probeR, settings) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/misc.js", this.coarseSurface, this, [chain, res, probeR, settings]);
}

molmil.lighterRGB = function (rgbIn, factor, nR) {
  var rgb = [rgbIn[0], rgbIn[1], rgbIn[2]];
  var total = rgb[0] + rgb[1] + rgb[2];
  var adjust = ((255.0 * 3 - total) * factor) / 3;
  rgb[0] += adjust;
  rgb[1] += adjust;
  rgb[2] += adjust;
  rgb = molmil.redistributeRGB(rgb);
  if (nR) return rgb;
  else return [Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2])];
}

molmil.redistributeRGB = function (rgb) {
  var threshold = 255;
  var m = Math.max(Math.max(rgb[0], rgb[1]), rgb[2]);
  if (m <= threshold) return rgb;
  var total = rgb[0] + rgb[1] + rgb[2];
  if (total >= 3 * threshold) return [threshold, threshold, threshold];
  var x = (3 * threshold - total) / (3 * m - total);
  var gray = threshold - x * m;
  rgb[0] = gray + x * rgb[0];
  rgb[1] = gray + x * rgb[1];
  rgb[2] = gray + x * rgb[2];
  return rgb;
}

// ** biological unit generation **
molmil.toggleBU = function (assembly_id, displayMode, colorMode, struct, soup) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/misc.js", this.toggleBU, this, [assembly_id, displayMode, colorMode, struct, soup]);
}

molmil.duplicateBU = function (assembly_id, options, struct, soup) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/misc.js", this.duplicateBU, this, [assembly_id, options, struct, soup]);
}

molmil.selectBU = function (assembly_id, displayMode, colorMode, options, struct, soup) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/misc.js", this.selectBU, this, [assembly_id, displayMode, colorMode, options, struct, soup]);
}

molmil.findContacts = function (atoms1, atoms2, r, soup) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/misc.js", this.findContacts, this, [atoms1, atoms2, r, soup]);
}

molmil.calcHbonds = function (group1, group2, soup) { // find H-bonds between group1 and group2
  return molmil.loadPlugin(molmil.settings.src + "plugins/misc.js", this.calcHbonds, this, [group1, group2, soup]);
}

molmil.attachResidue = function (parentResidue, newResType) { // find H-bonds between group1 and group2
  return molmil.loadPlugin(molmil.settings.src + "plugins/misc.js", this.attachResidue, this, [parentResidue, newResType]);
}

function renderHbonds(pairs, soup, settings) {
  if (!pairs.length) return;
  settings = settings || {};
  var type = settings.type || "cylinder";
  var radius = settings.radius || 0.0375;
  var rgba = settings.rgba || [0, 0, 255, 255];
  var N = (settings.breaks || 3) + 1;
  var lowQuality = settings.hasOwnProperty("lowQuality") ? settings.lowQuality : true;
  if (type != "dotted-cylinder") N = null;

  var objects = [], object, i;
  if (pairs[0][0] instanceof molmil.atomObject) {
    for (i = 0; i < pairs.length; i++) objects.push({ lowQuality: lowQuality, type: type, coords: [molmil.getAtomXYZ(pairs[i][0], soup), molmil.getAtomXYZ(pairs[i][1], soup)], rgba: rgba, radius: radius, N: N });
  }
  else {
    for (i = 0; i < pairs.length; i++) objects.push({ lowQuality: lowQuality, type: type, coords: [pairs[i][0], pairs[i][1]], rgba: rgba, radius: radius, N: N });
  }
  return molmil.geometry.generator(objects, soup, "Hydrogen bonds", { solid: true });
}

function renderPIinteractions(pairs, soup) {
  if (!pairs.length) return;

  var objects = [], object, i;
  for (i = 0; i < pairs.length; i++) {
    objects.push({ type: "sphere", coords: [pairs[i][0]], rgba: [255, 255, 255, 255], radius: 0.15 });
    objects.push({ type: "sphere", coords: [pairs[i][1]], rgba: [255, 255, 255, 255], radius: 0.15 });
    objects.push({ lowQuality: true, type: "dotted-cylinder", coords: [pairs[i][0], pairs[i][1]], rgba: [0, 255, 0, 255], radius: 0.0375, N: 4 });
  }

  return molmil.geometry.generator(objects, soup, "PI interactions", { solid: true });
}

function renderSaltBridges(pairs, soup) {
  if (!pairs.length) return;

  var objects1 = [], objects2 = [], object, i, X1, X2;
  for (i = 0; i < pairs.length; i++) {
    if (pairs[0][0] instanceof molmil.atomObject) { X1 = molmil.getAtomXYZ(pairs[i][0], soup); X2 = molmil.getAtomXYZ(pairs[i][1], soup); }
    else { X1 = pairs[i][0]; X2 = pairs[i][1]; }
    objects1.push({ type: "sphere", coords: [X1], rgba: [235, 235, 35, 127], radius: .25 });
    objects1.push({ type: "sphere", coords: [X2], rgba: [235, 235, 35, 127], radius: .25 });
    objects2.push({ lowQuality: true, type: "dotted-cylinder", coords: [X1, X2], rgba: [235, 235, 35, 255], radius: 0.0375, N: 6 });
  }

  return [molmil.geometry.generator(objects1, soup, "PI interactions", { solid: true, alphaMode: true }), molmil.geometry.generator(objects2, soup, "PI interactions", { solid: true })];
}

molmil.hslToRgb123 = function (h, s, l) {
  var r, g, b;
  if (s == 0) r = g = b = l; // achromatic
  else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [r, g, b];
}

// ** distance/angle/torsion calculation **

molmil.getAtomXYZ = function (atom, soup) {
  var modelId = soup.renderer.modelId;
  return [atom.chain.modelsXYZ[modelId][atom.xyz], atom.chain.modelsXYZ[modelId][atom.xyz + 1], atom.chain.modelsXYZ[modelId][atom.xyz + 2]];
}

molmil.calcMMDistance = function (a1, a2, soup) {
  var modelId = soup.renderer.modelId, xyz1, xyz2;
  xyz1 = [a1.chain.modelsXYZ[modelId][a1.xyz], a1.chain.modelsXYZ[modelId][a1.xyz + 1], a1.chain.modelsXYZ[modelId][a1.xyz + 2]];
  xyz2 = [a2.chain.modelsXYZ[modelId][a2.xyz], a2.chain.modelsXYZ[modelId][a2.xyz + 1], a2.chain.modelsXYZ[modelId][a2.xyz + 2]];

  try { return vec3.distance(xyz1, xyz2); }
  catch (e) { return NaN; }
}

molmil.calcAngle = function (a1, a2, a3) {
  var r2d = 180. / Math.PI, v1 = [0, 0, 0], v2 = [0, 0, 0];
  try {
    vec3.subtract(v1, a1, a2); vec3.normalize(v1, v1);
    vec3.subtract(v2, a3, a2); vec3.normalize(v2, v2);
    return Math.acos(vec3.dot(v1, v2)) * r2d;
  }
  catch (e) { return NaN; }
}

molmil.calcTorsion = function (a1, a2, a3, a4) {
  var r2d = 180. / Math.PI, b0 = [0, 0, 0], b1 = [0, 0, 0], b2 = [0, 0, 0], v = [0, 0, 0], w = [0, 0, 0], x, y, tmp = [0, 0, 0];

  try {
    vec3.subtract(b0, a2, a1); vec3.negate(b0, b0);
    vec3.subtract(b1, a3, a2); vec3.normalize(b1, b1);
    vec3.subtract(b2, a4, a3);

    vec3.subtract(v, b0, vec3.scale(tmp, b1, vec3.dot(b0, b1)));
    vec3.subtract(w, b2, vec3.scale(tmp, b1, vec3.dot(b2, b1)));
    x = vec3.dot(v, w);
    y = vec3.dot(vec3.cross(tmp, b1, v), w);
    return Math.atan2(y, x) * r2d;
  }
  catch (e) { return NaN; }
}

molmil.calcMMAngle = function (a1, a2, a3, soup) {
  var modelId = soup.renderer.modelId, xyz1, xyz2, xyz3;
  xyz1 = [a1.chain.modelsXYZ[modelId][a1.xyz], a1.chain.modelsXYZ[modelId][a1.xyz + 1], a1.chain.modelsXYZ[modelId][a1.xyz + 2]];
  xyz2 = [a2.chain.modelsXYZ[modelId][a2.xyz], a2.chain.modelsXYZ[modelId][a2.xyz + 1], a2.chain.modelsXYZ[modelId][a2.xyz + 2]];
  xyz3 = [a3.chain.modelsXYZ[modelId][a3.xyz], a3.chain.modelsXYZ[modelId][a3.xyz + 1], a3.chain.modelsXYZ[modelId][a3.xyz + 2]];

  return molmil.calcAngle(xyz1, xyz2, xyz3);
}

molmil.calcMMTorsion = function (a1, a2, a3, a4, soup) {
  var modelId = soup.renderer.modelId, xyz1, xyz2, xyz3, xyz4;
  xyz1 = [a1.chain.modelsXYZ[modelId][a1.xyz], a1.chain.modelsXYZ[modelId][a1.xyz + 1], a1.chain.modelsXYZ[modelId][a1.xyz + 2]];
  xyz2 = [a2.chain.modelsXYZ[modelId][a2.xyz], a2.chain.modelsXYZ[modelId][a2.xyz + 1], a2.chain.modelsXYZ[modelId][a2.xyz + 2]];
  xyz3 = [a3.chain.modelsXYZ[modelId][a3.xyz], a3.chain.modelsXYZ[modelId][a3.xyz + 1], a3.chain.modelsXYZ[modelId][a3.xyz + 2]];
  xyz4 = [a4.chain.modelsXYZ[modelId][a4.xyz], a4.chain.modelsXYZ[modelId][a4.xyz + 1], a4.chain.modelsXYZ[modelId][a4.xyz + 2]];

  return molmil.calcTorsion(xyz1, xyz2, xyz3, xyz4);
}

molmil.calculateBBTorsions = function (chain, soup) {
  // calculate the phi/psi angles for the given chain...
  // phi: C_-N-CA-C
  // psi: N-CA-C-N^
  if (chain.molecules.length < 2) return;

  for (var m = 1; m < chain.molecules.length - 1; m++) {
    chain.molecules[m].phiAngle = molmil.calcMMTorsion(chain.molecules[m - 1].C, chain.molecules[m].N, chain.molecules[m].CA, chain.molecules[m].C, soup);
    chain.molecules[m].psiAngle = molmil.calcMMTorsion(chain.molecules[m].N, chain.molecules[m].CA, chain.molecules[m].C, chain.molecules[m + 1].N, soup);
    chain.molecules[m].omegaAngle = molmil.calcMMTorsion(chain.molecules[m - 1].CA, chain.molecules[m - 1].C, chain.molecules[m].N, chain.molecules[m].CA, soup);
  }

  chain.molecules[0].psiAngle = molmil.calcMMTorsion(chain.molecules[0].N, chain.molecules[0].CA, chain.molecules[0].C, chain.molecules[1].N, soup);
  chain.molecules[m].phiAngle = molmil.calcMMTorsion(chain.molecules[m - 1].C, chain.molecules[m].N, chain.molecules[m].CA, chain.molecules[m].C, soup);
  chain.molecules[m].omegaAngle = molmil.calcMMTorsion(chain.molecules[m - 1].CA, chain.molecules[m - 1].C, chain.molecules[m].N, chain.molecules[m].CA, soup);

  chain.molecules[0].phiAngle = chain.molecules[1].phiAngle;
  chain.molecules[m].psiAngle = chain.molecules[m - 1].psiAngle;
  chain.molecules[0].omegaAngle = chain.molecules[1].omegaAngle;
};

// ** used by efsite to synchronize canvases (camera orientation) **
molmil.linkCanvases = function (canvases) {
  for (var i = 1; i < canvases.length; i++) canvases[i].renderer.camera = canvases[0].renderer.camera;
  for (var i = 0; i < canvases.length; i++) canvases[i].molmilViewer.canvases = canvases;
}

molmil.__webglNotSupported__ = function (canvas) {
  if (window["webglNotSupported"]) return webglNotSupported(canvas);
  var div = molmil_dep.dcE("DIV");
  div.innerHTML = "Your browser does not seem to support WebGL. Please visit the <a target=\"blank\" class=\"external\" href=\"http://get.webgl.org/\">WebGL website</a> for more info on how to gain WebGL support on your browser.<br />";
  div.style.border = "1px solid #ddd";
  div.style.margin = div.style.padding = ".25em";
  canvas.parentNode.replaceChild(div, canvas);
  return div;
};

// ** RMSD calculation betwen two arrays of atoms **
molmil.calcRMSD = function (atoms1, atoms2, transform) { // use w_k ???
  return molmil.loadPlugin(molmil.settings.src + "plugins/md-anal.js", this.calcRMSD, this, [atoms1, atoms2, transform]);
}

// end

// ** Molmil's command line interface **

molmil.invertColor = function (hexTripletColor) { return "#" + ("000000" + (0xFFFFFF ^ parseInt(hexTripletColor.substring(1), 16)).toString(16)).slice(-6); }
molmil.componentToHex = function (c) { var hex = c.toString(16); return hex.length == 1 ? "0" + hex : hex; }
molmil.rgb2hex = function (r, g, b) { return "#" + molmil.componentToHex(r) + molmil.componentToHex(g) + molmil.componentToHex(b); }
molmil.hex2rgb = function (hex) { hex = (hex.charAt(0) == "#" ? hex.substr(1, 7) : hex); return [parseInt(hex.substring(0, 2), 16), parseInt(hex.substring(2, 4), 16), parseInt(hex.substring(4, 6), 16)]; }

molmil.checkRebuild = function () {
  var soup = molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  if (soup.renderer.rebuildRequired) soup.renderer.initBuffers();
  soup.renderer.rebuildRequired = false;
  soup.renderer.canvas.update = true;
}

molmil.commandLines = {};

molmil.commandLine = function (canvas) {
  this.environment = { fileObjects: {} };
  this.commandBuffer = [];
  for (var e in window) this.environment[e] = undefined;

  this.environment.setTimeout = function (cb, tm) { window.setTimeout(cb, tm); }
  this.environment.clearTimeout = function () { window.clearTimeout(); }
  this.environment.navigator = window.navigator;
  this.environment.window = this;

  this.environment.console = {};

  var exports = ["molmil", "molmil_dep", "glMatrix", "mat2", "mat2", "mat3", "mat4", "quat", "quat2", "vec2", "vec3", "vec4"];

  //this.environment.molmil = molmil;
  //this.environment.molmil_dep = molmil_dep;

  for (var i = 0; i < exports.length; i++) this.environment[exports[i]] = window[exports[i]];

  this.canvas = this.environment.cli_canvas = canvas; this.soup = this.environment.cli_soup = canvas.molmilViewer;
  canvas.commandLine = this;
  this.environment.global = this.environment;
  this.buildGUI();

  this.environment.console.debugMode = true;

  this.environment.console.log = function () {
    if (this.debugMode) console.log.apply(console, arguments);
    var __arguments = Array.prototype.slice.call(arguments, 0);
    var tmp = document.createElement("div"); tmp.textContent = __arguments.join(", ");
    this.custom(tmp);
  };
  this.environment.console.warning = function () {
    if (this.debugMode) console.warning.apply(console, arguments);
    var __arguments = Array.prototype.slice.call(arguments, 0);
    var tmp = document.createElement("div"); tmp.textContent = __arguments.join(", ");
    tmp.style.color = "yellow";
    this.custom(tmp);
  };
  this.environment.console.error = function () {
    if (this.debugMode) console.error.apply(console, arguments);
    var __arguments = Array.prototype.slice.call(arguments, 0);
    //console.error.apply(console, __arguments);
    var tmp = document.createElement("div"); tmp.textContent = __arguments.join(", ");
    tmp.style.color = "red";
    this.custom(tmp);
  };
  this.environment.console.logCommand = function () {
    if (this.cli.environment.scriptUrl) return;
    var __arguments = Array.prototype.slice.call(arguments, 0);
    var tmp = document.createElement("div"); tmp.textContent = __arguments.join("\n");
    tmp.style.color = "#00BFFF";
    this.custom(tmp, true);
  };
  this.environment.console.custom = function (obj, noPopup) {
    if (!obj.textContent) return;
    this.logBox.appendChild(obj);
    this.logBox.scrollTop = this.logBox.scrollHeight;
    if (noPopup != true) this.logBox.icon.onclick(true);
  };
  this.environment.console.runCommand = function (command, priority) {
    if (!molmil.isBalancedStatement(command)) return;
    if (this.cli.environment.cli_canvas.commandLine.initDone === undefined) return molmil_dep.asyncStart(this.runCommand, [command, priority], this, 10);

    var sub_commands = [], startIdx = 0, idx = 0, sc, tmpIdx;
    var n = 0;
    while (idx < command.length) {
      idx = command.indexOf(";", startIdx);
      if (idx == -1) {
        sub_commands.push(command.substr(startIdx).trim());
        break;
      }

      sc = command.substring(startIdx, idx).trim();

      while (!molmil.isBalancedStatement(sc)) {
        tmpIdx = idx + 1;
        idx = command.indexOf(";", tmpIdx);
        sc = command.substring(startIdx, idx).trim();
      }
      sub_commands.push(sc);

      startIdx = idx + 1;
    }

    if (priority) { var buffer = this.cli.commandBuffer; this.cli.commandBuffer = []; }

    for (var i = 0; i < sub_commands.length; i++) {
      sub_commands[i] = sub_commands[i].trim();
      this.logCommand(sub_commands[i]);
      this.cli.eval(sub_commands[i]);
      this.backlog.unshift(sub_commands[i]);
    }
    this.cli.eval("molmil.checkRebuild();");
    if (priority) { for (var i = 0; i < buffer.length; i++) this.cli.eval(buffer[i]); }

    /*
    if (command.indexOf("{") == -1 && command.indexOf(";") != -1) {
      var sub_commands = command.split(";");
      for (var i=0; i<sub_commands.length; i++) {
        sub_commands[i] = sub_commands[i].trim();
        this.logCommand(sub_commands[i]);
        this.cli.eval(sub_commands[i]);
        this.backlog.unshift(sub_commands[i]);
      }
    }
    else {
      command = command.trim();
      this.logCommand(command);
      this.cli.eval(command);
      this.backlog.unshift(command);
    }
    */
    this.buffer = ""; this.blSel = -1;
    if (this.cli.environment.cli_canvas.commandLine.initDone == false) this.cli.environment.cli_canvas.commandLine.initDone = true;
  };
  this.run = function (command) { this.environment.console.runCommand(command); }
  this.environment.console.backlog = [];
  this.environment.console.buffer = "";
  this.environment.console.blSel = -1;


  this.environment.console.logBox = this.logBox; this.environment.console.cli = this;

  this.environment.colors = { red: [255, 0, 0, 255], green: [0, 255, 0, 255], blue: [0, 0, 255, 255], grey: [100, 100, 100, 255], magenta: [255, 0, 255, 255], cyan: [0, 255, 255, 255], yellow: [255, 255, 0, 255], black: [0, 0, 0, 255], white: [255, 255, 255, 255], purple: [128, 0, 128, 255], orange: [255, 165, 0, 255] };

  //this.bindNullInterface();


  // this.bindPymolInterface();

  var init = function () {
    if (this.environment.console.backlog.length == 0) this.initDone = true;
    else this.initDone = false;
    this.bindPymolInterface();
    this.icon.show(true); this.icon.hide();
    if (molmil.onInterfacebind) molmil.onInterfacebind(this);
  };

  if (!molmil.commandLines.pyMol) {
    molmil.loadPlugin(molmil.settings.src + "plugins/pymol-script.js", init, this, [], true);
  }
};

molmil.color2rgba = function (clr) {
  var simple_colors = { aliceblue: 'f0f8ff', antiquewhite: 'faebd7', aqua: '00ffff', aquamarine: '7fffd4', azure: 'f0ffff', beige: 'f5f5dc', bisque: 'ffe4c4', black: '000000', blanchedalmond: 'ffebcd', blue: '0000ff', blueviolet: '8a2be2', brown: 'a52a2a', burlywood: 'deb887', cadetblue: '5f9ea0', chartreuse: '7fff00', chocolate: 'd2691e', coral: 'ff7f50', cornflowerblue: '6495ed', cornsilk: 'fff8dc', crimson: 'dc143c', cyan: '00ffff', darkblue: '00008b', darkcyan: '008b8b', darkgoldenrod: 'b8860b', darkgray: 'a9a9a9', darkgreen: '006400', darkkhaki: 'bdb76b', darkmagenta: '8b008b', darkolivegreen: '556b2f', darkorange: 'ff8c00', darkorchid: '9932cc', darkred: '8b0000', darksalmon: 'e9967a', darkseagreen: '8fbc8f', darkslateblue: '483d8b', darkslategray: '2f4f4f', darkturquoise: '00ced1', darkviolet: '9400d3', deeppink: 'ff1493', deepskyblue: '00bfff', dimgray: '696969', dodgerblue: '1e90ff', feldspar: 'd19275', firebrick: 'b22222', floralwhite: 'fffaf0', forestgreen: '228b22', fuchsia: 'ff00ff', gainsboro: 'dcdcdc', ghostwhite: 'f8f8ff', gold: 'ffd700', goldenrod: 'daa520', gray: '808080', green: '008000', greenyellow: 'adff2f', honeydew: 'f0fff0', hotpink: 'ff69b4', indianred: 'cd5c5c', indigo: '4b0082', ivory: 'fffff0', khaki: 'f0e68c', lavender: 'e6e6fa', lavenderblush: 'fff0f5', lawngreen: '7cfc00', lemonchiffon: 'fffacd', lightblue: 'add8e6', lightcoral: 'f08080', lightcyan: 'e0ffff', lightgoldenrodyellow: 'fafad2', lightgrey: 'd3d3d3', lightgreen: '90ee90', lightpink: 'ffb6c1', lightsalmon: 'ffa07a', lightseagreen: '20b2aa', lightskyblue: '87cefa', lightslateblue: '8470ff', lightslategray: '778899', lightsteelblue: 'b0c4de', lightyellow: 'ffffe0', lime: '00ff00', limegreen: '32cd32', linen: 'faf0e6', magenta: 'ff00ff', maroon: '800000', mediumaquamarine: '66cdaa', mediumblue: '0000cd', mediumorchid: 'ba55d3', mediumpurple: '9370d8', mediumseagreen: '3cb371', mediumslateblue: '7b68ee', mediumspringgreen: '00fa9a', mediumturquoise: '48d1cc', mediumvioletred: 'c71585', midnightblue: '191970', mintcream: 'f5fffa', mistyrose: 'ffe4e1', moccasin: 'ffe4b5', navajowhite: 'ffdead', navy: '000080', oldlace: 'fdf5e6', olive: '808000', olivedrab: '6b8e23', orange: 'ffa500', orangered: 'ff4500', orchid: 'da70d6', palegoldenrod: 'eee8aa', palegreen: '98fb98', paleturquoise: 'afeeee', palevioletred: 'd87093', papayawhip: 'ffefd5', peachpuff: 'ffdab9', peru: 'cd853f', pink: 'ffc0cb', plum: 'dda0dd', powderblue: 'b0e0e6', purple: '800080', red: 'ff0000', rosybrown: 'bc8f8f', royalblue: '4169e1', saddlebrown: '8b4513', salmon: 'fa8072', sandybrown: 'f4a460', seagreen: '2e8b57', seashell: 'fff5ee', sienna: 'a0522d', silver: 'c0c0c0', skyblue: '87ceeb', slateblue: '6a5acd', slategray: '708090', snow: 'fffafa', springgreen: '00ff7f', steelblue: '4682b4', tan: 'd2b48c', teal: '008080', thistle: 'd8bfd8', tomato: 'ff6347', turquoise: '40e0d0', violet: 'ee82ee', violetred: 'd02090', wheat: 'f5deb3', white: 'ffffff', whitesmoke: 'f5f5f5', yellow: 'ffff00', yellowgreen: '9acd32' };

  if (simple_colors.hasOwnProperty(clr.toLowerCase())) clr = "#" + simple_colors[clr.toLowerCase()];
  if (clr.substr(0, 1) == "#") {
    var hex = clr.substr(1, 7)
    return [parseInt(hex.substring(0, 2), 16), parseInt(hex.substring(2, 4), 16), parseInt(hex.substring(4, 6), 16), 255];
  }

  return clr;

}

molmil.commandLine.prototype.buildGUI = function () {
  this.consoleBox = this.canvas.parentNode.pushNode("span");
  this.consoleBox.className = "molmil_UI_cl_box"; this.consoleBox.style.overflow = "initial";

  this.logBox = this.consoleBox.pushNode("span");
  this.logBox.icon = this.icon = this.consoleBox.pushNode("span");
  this.icon.innerHTML = "<"; this.icon.title = "Display command line";
  this.icon.className = "molmil_UI_cl_icon";

  this.icon.show = function (nofocus) {
    this.innerHTML = ">"; this.title = "Hide command line";

    this.cli.logBox.style.borderBottom = "";
    this.cli.logBox.style.borderRadius = ".33em";

    this.inp.style.display = this.cli.logBox.style.display = "initial";
    this.cli.consoleBox.style.height = this.cli.consoleBox.style.maxHeight = "calc(" + this.cli.canvas.clientHeight + "px - 6em)";
    this.cli.consoleBox.style.overflow = "";
    this.cli.logBox.style.overflow = "";
    this.cli.logBox.style.pointerEvents = "";
    if (!nofocus) this.inp.focus();
  }
  this.icon.hide = function () {
    this.innerHTML = "<"; this.title = "Display command line";
    this.inp.style.display = this.cli.logBox.style.display = "";
  }
  this.icon.onclick = function (mini) {
    if (mini == true) {
      if (this.inp.style.display == "") {
        this.cli.logBox.style.display = "initial";
        this.cli.consoleBox.style.height = "8em";
        this.cli.logBox.style.pointerEvents = "none";
        this.cli.logBox.style.overflow = "hidden";
        this.logBox.scrollTop = this.logBox.scrollHeight;
      }
      return;
    }
    if (this.inp.style.display == "initial") this.hide();
    else this.show();
  };
  this.inp = this.icon.inp = this.consoleBox.pushNode("span");
  this.inp.className = "molmil_UI_cl_input"; this.inp.style.display = "none";
  this.inp.contentEditable = true;
  this.inp.cli = this.icon.cli = this;
  this.icon.logBox = this.inp.logBox = this.logBox;

  this.logBox.className = "molmil_UI_cl_logbox"; this.logBox.style.display = "none";

  this.inp.console = this.environment.console;

  this.inp.onkeydown = function (e) {
    var command = this.textContent;
    if (e.keyCode == 13 && !e.shiftKey && molmil.isBalancedStatement(command)) {
      this.console.runCommand(command);
      this.textContent = "";
      return false;
    }
    if (e.keyCode == 38 && e.ctrlKey) {
      this.console.blSel++;
      if (this.console.blSel >= this.console.backlog.length) this.console.blSel = this.console.backlog.length - 1;
      this.textContent = this.console.backlog[this.console.blSel];
    }
    if (e.keyCode == 40 && e.ctrlKey) {
      this.console.blSel--;
      if (this.console.blSel < -1) this.console.blSel = 0;
      if (this.console.blSel == -1) this.textContent = this.console.buffer;
      else this.textContent = this.console.backlog[this.console.blSel];
    }
    if (this.console.blSel == -1) this.console.buffer = command;
  };
};

molmil.xhr = function (url) {
  if (window.hasOwnProperty("rewriteURL")) url = rewriteURL(url);
  if (window.hasOwnProperty("customXHR")) var request = customXHR(url);
  else var request = new molmil_dep.CallRemote("GET");
  request.URL = url;
  return request;
};

molmil.loadScript = function (url) {
  var cc = this.cli_canvas;
  var cli = cc.commandLine;


  cc.molmilViewer.downloadInProgress++;

  var request = molmil.xhr(url);
  request.ASYNC = true;
  request.OnDone = function () {
    cc.molmilViewer.downloadInProgress--;
    var pathconv = url.split("=");
    pathconv[pathconv.length - 1] = pathconv[pathconv.length - 1].substr(0, pathconv[pathconv.length - 1].lastIndexOf('/'))
    if (pathconv[pathconv.length - 1]) pathconv[pathconv.length - 1] += "/";
    cc.molmilViewer.__cwd__ = cli.environment.scriptUrl = pathconv.join("=");
    cli.environment.console.runCommand(this.request.responseText.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, ""), true);
  }
  for (var e in cc.molmilViewer.extraREST) request.AddParameter(e, cc.molmilViewer.extraREST[e]);
  for (var e in cc.molmilViewer.extraRESTHeaders) request.headers[e] = cc.molmilViewer.extraRESTHeaders[e];
  request.Send();
}

molmil.commandLine.prototype.eval = function (command) {
  // instead of having two command lines (e.g. pymol & javascript), only have one command line (javascript), but rewrite the incoming /command/ from pymol --> javascript...
  command = command.trim();
  if (!command) return;

  if (this.soup.downloadInProgress || !this.initDone) {
    this.commandBuffer.push(command);
    if (this.commandBuffer.length == 1) this.wait4Download();
    return;
  }

  molmil.cli_canvas = this.canvas; molmil.cli_soup = this.canvas.molmilViewer;
  if (!this.altCommandIF(this.environment, command)) this.runCommand.apply(this.environment, [command]);
  molmil.cli_canvas = molmil.cli_soup = null;
};

molmil.commandLine.prototype.wait4Download = function () {
  if (this.soup.downloadInProgress || !this.initDone) {
    var that = this;
    setTimeout(function () { that.wait4Download(); }, 100);
    return;
  }

  var buffer = this.commandBuffer; this.commandBuffer = [];
  for (var i = 0; i < buffer.length; i++) {
    this.eval(buffer[i]);
  }
};

molmil.commandLine.prototype.runCommand = function (command) { // note the /this/ stuff will not work properly... if there are many functions and internal /var/s...
  if (command.match(/\bfunction\b/)) command = command.replace(/(\b|;)function\s+(\w+)/g, "$1global.$2 = function"); // make sure that functions are stored in /this/ and not in the local scope...
  else command = (' ' + command).replace(/(\s|;)var\s+(\w+)\s*=/g, "$1global.$2 ="); // make sure that variables are stored in /this/ and not in the local scope...
  command = command.replace(/(\s|;)return\sthis;/g, "$1return window;"); // make sure that it is impossible to get back the real window object
  try { with (this) { eval(command); } }
  catch (e) { this.console.error(e); }
};

molmil.isBalancedStatement = function (string) {
  var parentheses = "[]{}()", stack = [], i, character, bracePosition;
  for (i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);
    if (bracePosition === -1) continue;

    if (bracePosition % 2 === 0) stack.push(bracePosition + 1);
    else if (stack.pop() !== bracePosition) return false;
  }
  return stack.length === 0;
}

molmil.commandLine.prototype.bindNullInterface = function () {
  if (this.altCommandIF) this.environment.console.log("Previous command interface unbound.");
  this.altCommandIF = function (env, command) { return false; };
}

molmil.commandLine.prototype.bindPDBjViewerInterface = function () {
  return molmil.loadPlugin(molmil.settings.src + "plugins/jv-script.js", this.bindPDBjViewerInterface, this);
}


// END

// misc stuff

molmil.setSlab = function (near, far, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;

  if (!soup.renderer.settings.slab) {
    soup.renderer.settings.slab = true;
    molmil.configBox.glsl_fog = false;
    molmil.shaderEngine.recompile(soup.renderer);
  }

  soup.renderer.settings.slabNear = near;
  soup.renderer.settings.slabFar = far;

  soup.canvas.update = true;
};

molmil.selectAtoms = function (atoms, append, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  if (!append) soup.atomSelection = [];

  for (var a = 0; a < atoms.length; a++) soup.atomSelection.push(atoms[a]);
};

// dna/rna cartoon through phosphor

molmil.resetFocus = function (soup, t) {
  t = t || 0;
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;

  soup.atomSelection = [];

  soup.renderer.updateSelection();

  molmil.zoomTo(soup.avgXYZ, soup.COR, [0.0, 0.0, soup.calcZ()], soup, t);
}

molmil.zoomTo = function (newCOR, oldCOR, newXYZ, soup, t) {
  for (var i = 0; i < soup.canvases.length; i++) soup.canvases[i].molmilViewer.COR = newCOR;
  soup.lastKnownAS = newCOR;
  soup.avgXYZ = newCOR;

  var framerate = 50, nFrames = Math.round(t * (1000. / framerate));
  if (nFrames > 1) {
    var CORvec = [soup.COR[0] - oldCOR[0], soup.COR[1] - oldCOR[1], soup.COR[2] - oldCOR[2]], xyzStart = [0., 0., 0.];
    vec3.transformMat4(xyzStart, CORvec, soup.renderer.camera.generateMatrix());

    var dX = (xyzStart[0] - newXYZ[0]) / nFrames, dY = (xyzStart[1] - newXYZ[1]) / nFrames, dZ = (xyzStart[2] - newXYZ[2]) / nFrames;

    clearTimeout(molmil.zoomTID);
    var updateCamera = function (fid) {
      soup.renderer.camera.x = xyzStart[0] - (dX * (fid + 1));
      soup.renderer.camera.y = xyzStart[1] - (dY * (fid + 1));
      soup.renderer.camera.z = xyzStart[2] - (dZ * (fid + 1));
      soup.renderer.modelViewMatrix = soup.renderer.camera.generateMatrix();
      soup.canvas.update = true;
      if (fid < nFrames - 1) molmil.zoomTID = molmil_dep.asyncStart(updateCamera, [fid + 1], null, framerate);
    }
    return updateCamera(0);
  }

  soup.renderer.camera.x = newXYZ[0]; soup.renderer.camera.y = newXYZ[1]; soup.renderer.camera.z = newXYZ[2];
  soup.renderer.modelViewMatrix = soup.renderer.camera.generateMatrix();
  soup.canvas.update = true;
}

molmil.selectionFocus = function (soup, t) {
  t = t || 0;
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;

  // center & zoom on atomSelection

  var xyz, Xpos, xyzRef, modelId = soup.renderer.modelId, avgX = 0.0, avgY = 0.0, avgZ = 0.0;

  var geomRanges = [1e99, -1e99, 1e99, -1e99, 1e99, -1e99];

  for (var a = 0; a < soup.atomSelection.length; a++) {
    Xpos = soup.atomSelection[a].xyz;
    xyzRef = soup.atomSelection[a].chain.modelsXYZ[modelId];
    xyz = [xyzRef[Xpos], xyzRef[Xpos + 1], xyzRef[Xpos + 2]];
    avgX += xyz[0];
    avgY += xyz[1];
    avgZ += xyz[2];
  }
  avgX /= soup.atomSelection.length;
  avgY /= soup.atomSelection.length;
  avgZ /= soup.atomSelection.length;


  for (var a = 0; a < soup.atomSelection.length; a++) {
    Xpos = soup.atomSelection[a].xyz;
    xyzRef = soup.atomSelection[a].chain.modelsXYZ[modelId];
    xyz = [xyzRef[Xpos] - avgX, xyzRef[Xpos + 1] - avgY, xyzRef[Xpos + 2] - avgZ];

    if (xyz[0] < geomRanges[0]) geomRanges[0] = xyz[0];
    if (xyz[0] > geomRanges[1]) geomRanges[1] = xyz[0];

    if (xyz[1] < geomRanges[2]) geomRanges[2] = xyz[1];
    if (xyz[1] > geomRanges[3]) geomRanges[3] = xyz[1];

    if (xyz[2] < geomRanges[4]) geomRanges[4] = xyz[2];
    if (xyz[2] > geomRanges[5]) geomRanges[5] = xyz[2];
  }

  soup.renderer.updateSelection();

  molmil.zoomTo([avgX, avgY, avgZ], soup.COR, [0.0, 0.0, soup.calcZ(geomRanges)], soup, t);
};

molmil.searchAtom = function (struc, chainID, resID, atomID) {
  var c, m, a;
  for (c = 0; c < struc.chains.length; c++) {
    if (struc.chains[c].name != chainID) continue
    if (!resID) return struc.chains[c];
    for (m = 0; m < struc.chains[c].molecules.length; m++) {
      if (struc.chains[c].molecules[m].RSID != resID) continue;
      if (!atomID) return struc.chains[c].molecules[m];
      for (a = 0; a < struc.chains[c].molecules[m].atoms.length; a++) {
        if (struc.chains[c].molecules[m].atoms[a].atomName != atomID) continue;
        return struc.chains[c].molecules[m].atoms[a];
      }
    }
  }
  return null;
}

molmil.findResidue = function (resInfo, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;

  var chains = [];
  if (resInfo.chain) { for (var c = 0; c < soup.chains.length; c++) { if (soup.chains[c].name == resInfo.chain) { chains.push(soup.chains[c]); break; } } }
  else chains = soup.chains;

  var out = [], chain;
  for (var c = 0; c < chains.length; c++) {
    chain = chains[c];
    for (var m = 0; m < chain.molecules.length; m++) {
      if (resInfo.name && chain.molecules[m].name.toLowerCase() == resInfo.name.toLowerCase() && chain.molecules[m].id == resInfo.id) out.push(chain.molecules[m]);
    }
  }
  return out;
}

molmil.selectSequence = function (seq, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;

  var seq3 = [], conv = { "A": "ALA", "C": "CYS", "D": "ASP", "E": "GLU", "F": "PHE", "G": "GLY", "H": "HIS", "I": "ILE", "K": "LYS", "L": "LEU", "M": "MET", "N": "ASN", "P": "PRO", "Q": "GLN", "R": "ARG", "S": "SER", "T": "THR", "V": "VAL", "W": "TRP", "Y": "TYR" };
  molmil.AATypesBase = { "ALA": 1, "CYS": 1, "ASP": 1, "GLU": 1, "PHE": 1, "GLY": 1, "HIS": 1, "ILE": 1, "LYS": 1, "LEU": 1, "MET": 1, "ASN": 1, "PRO": 1, "GLN": 1, "ARG": 1, "SER": 1, "THR": 1, "VAL": 1, "TRP": 1, "TYR": 1, "ACE": 1, "NME": 1, "HIP": 1, "HIE": 1, "HID": 1 };
  for (var i = 0; i < seq.length; i++) {
    if (conv.hasOwnProperty(seq[i])) seq3.push(conv[seq[i]]);
    else seq3.push("***");
  }

  var output = [], m1, m2, n, OK;
  for (var c = 0; c < soup.chains.length; c++) {
    for (m1 = 0; m1 < soup.chains[c].molecules.length; m1++) {
      OK = true;
      for (m2 = m1, n = 0; m2 < Math.min(soup.chains[c].molecules.length, m1 + seq3.length); m2++, n++) if (soup.chains[c].molecules[m2].name != seq3[n]) { OK = false; break; }
      if (OK) for (m2 = m1; m2 < m1 + seq3.length; m2++) output.push(soup.chains[c].molecules[m2]);
    }
  }
  return output;
}

molmil.calcCenter = function (input) {
  var modelId = molmil.geometry.modelId || 0;
  if (!(input instanceof Array)) input = [input];
  var coords = [], tmp, j, c, names = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] instanceof molmil.atomObject) {
      //if (input[i].element == "H") continue;
      coords.push([input[i].chain.modelsXYZ[modelId][input[i].xyz], input[i].chain.modelsXYZ[modelId][input[i].xyz + 1], input[i].chain.modelsXYZ[modelId][input[i].xyz + 2]]);
      names.push(input[i].atomName);
    }
    else if (input[i] instanceof molmil.molObject) {
      tmp = input[i].chain.modelsXYZ[modelId];
      for (j = 0; j < input[i].atoms.length; j++) if (input[i].atoms[j].element != "H") {
        coords.push([tmp[input[i].atoms[j].xyz], tmp[input[i].atoms[j].xyz + 1], tmp[input[i].atoms[j].xyz + 2]]);
        names.push(input[i].atoms[j].atomName);
      }
    }
    else if (input[i] instanceof molmil.chainObject) {
      tmp = input[i].modelsXYZ[modelId];
      for (j = 0; j < input[i].atoms.length; j++) if (input[i].atoms[j].element != "H") {
        coords.push([tmp[input[i].atoms[j].xyz], tmp[input[i].atoms[j].xyz + 1], tmp[input[i].atoms[j].xyz + 2]]);
        names.push(input[i].atoms[j].atomName);
      }
    }
    else if (input[i] instanceof molmil.entryObject) {
      for (c = 0; c < input[i].chains.length; c++) {
        tmp = input[i].chains[c].modelsXYZ[modelId];
        for (j = 0; j < input[i].chains[c].atoms.length; j++) if (input[i].chains[c].atoms[j].element != "H") {
          coords.push([tmp[input[i].chains[c].atoms[j].xyz], tmp[input[i].chains[c].atoms[j].xyz + 1], tmp[input[i].chains[c].atoms[j].xyz + 2]]);
          names.push(input[i].chains[c].atoms[j].atomName);
        }
      }
    }
  }

  var avgXYZ = [0.0, 0.0, 0.0], N = 0;
  for (i = 0; i < coords.length; i++) {
    avgXYZ[0] += coords[i][0]; avgXYZ[1] += coords[i][1]; avgXYZ[2] += coords[i][2];
    N++;
  }
  avgXYZ[0] /= N; avgXYZ[1] /= N; avgXYZ[2] /= N;

  var xMin = 1e99, xMax = -1e99, yMin = 1e99, yMax = -1e99, zMin = 1e99, zMax = -1e99;

  var tmp, n_tmp;
  for (var i = 0; i < coords.length; i++) {
    tmp = coords[i][0] - avgXYZ[0];
    if (tmp < xMin) xMin = tmp;
    if (tmp > xMax) xMax = tmp;

    tmp = coords[i][1] - avgXYZ[1];
    if (tmp < yMin) yMin = tmp;
    if (tmp > yMax) yMax = tmp;

    tmp = coords[i][2] - avgXYZ[2];
    if (tmp < zMin) zMin = tmp;
    if (tmp > zMax) zMax = tmp;
  }

  return [avgXYZ, Math.max((xMax - xMin), (yMax - yMin), (zMax - zMin)) * .55, coords, names];
}

molmil.addLabel = function (text, settings, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  settings = settings || {};

  var obj;
  if (soup instanceof molmil.labelObject) {
    obj = soup;
    soup = obj.soup

    text = text || obj.text;
    settings.xyz = settings.xyz || obj.settings.xyz;
  }
  else {
    if (!settings.hasOwnProperty("xyz") && !settings.hasOwnProperty("atomSelection")) return console.error("Cannot create label: no xyz variable set...");
    obj = new molmil.labelObject(soup); soup.texturedBillBoards.push(obj);
    obj.remove = function () {
      gl.deleteTexture(this.texture);
      var idx = soup.texturedBillBoards.indexOf(this);
      if (idx != -1) soup.texturedBillBoards.splice(idx, 1);
    };
  }

  var saa = Object.keys(obj.settings); for (var i = 0; i < saa.length; i++) { if (!settings.hasOwnProperty(saa[i])) settings[saa[i]] = obj.settings[saa[i]]; }

  var resolutionScaler = Math.max(soup.canvas.width / 1920, soup.canvas.height / 1080);

  if (text != obj.text || settings.fontSize != obj.settings.fontSize || settings.color[0] != obj.settings.color[0] || settings.color[1] != obj.settings.color[1] || settings.color[2] != obj.settings.color[2]) {
    var textCtx = document.createElement("canvas").getContext("2d");
    settings.fontSize *= 2 * resolutionScaler; // render at a higher resolution

    var tmp = text.replace(/\\n/g, "\n").split(/\n/g), h, w, i;
    h = tmp.length * settings.fontSize; w = 0;
    var saa = 0;
    var regex = /[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g;
    for (var i = 0; i < tmp.length; i++) {
      saa = (tmp[i].match(regex) || "").length * 0.75 + tmp[i].length;
      if (saa > w) w = saa;
    }

    w = (w * settings.fontSize * .6) + 6;

    var Yoffset = 0;

    if (settings.addBorder) {
      h = tmp.length * settings.fontSize * 1.25;
      w += settings.fontSize * .5;
      h += settings.fontSize * .5;
      Yoffset += settings.fontSize * .375;
    }


    textCtx.canvas.width = w; textCtx.canvas.height = h * 1.2;
    textCtx.font = "bold " + settings.fontSize + "px Consolas, \"Liberation Mono\", Courier, monospace"; textCtx.textAlign = settings.textAlign || "center"; textCtx.textBaseline = settings.textBaseline || "middle";
    textCtx.clearRect(0, 0, textCtx.canvas.width, textCtx.canvas.height);

    if (settings.bg_color) {
      textCtx.fillStyle = molmil.rgb2hex(settings.bg_color[0], settings.bg_color[1], settings.bg_color[2]);
      textCtx.ellipse(textCtx.canvas.width * .5, textCtx.canvas.height * .5, textCtx.canvas.width * .5, textCtx.canvas.height * .5, 0, 0, Math.PI * 2, false);
      textCtx.lineWidth = 0;
      textCtx.fill();
    }

    textCtx.fillStyle = molmil.rgb2hex(settings.color[0], settings.color[1], settings.color[2]);

    if (settings.outline_color) textCtx.strokeStyle = molmil.rgb2hex(settings.outline_color[0], settings.outline_color[1], settings.outline_color[2]);
    else textCtx.strokeStyle = "#000000";
    textCtx.lineWidth = Math.max(Math.round(settings.fontSize / 50), 1.0);

    if (settings.textAlign == "left") {
      for (var i = 0; i < tmp.length; i++) {
        textCtx.fillText(tmp[i], 0, (settings.fontSize / 1.5) + (settings.fontSize * i) + Yoffset);
        if (!settings.addBorder) {
          textCtx.strokeText(tmp[i], 0, (settings.fontSize / 1.5) + (settings.fontSize * i) + Yoffset);
        }
      }
    }
    else if (settings.textAlign == "right") {
      for (var i = 0; i < tmp.length; i++) {
        textCtx.fillText(tmp[i], w, (settings.fontSize / 1.5) + (settings.fontSize * i) + Yoffset);
        if (!settings.addBorder) textCtx.strokeText(tmp[i], w, (settings.fontSize / 1.5) + (settings.fontSize * i) + Yoffset);
      }
    }
    else {
      textCtx.textAlign = settings.textAlign = "center";
      for (var i = 0; i < tmp.length; i++) {
        textCtx.fillText(tmp[i], w / 2, (settings.fontSize / 1.5) + (settings.fontSize * i) + Yoffset);
        if (!settings.addBorder) textCtx.strokeText(tmp[i], w / 2, (settings.fontSize / 1.5) + (settings.fontSize * i) + Yoffset);
      }
    }


    if (settings.addBorder) {
      textCtx.beginPath();
      textCtx.ellipse(textCtx.canvas.width * .5, textCtx.canvas.height * .5, (textCtx.canvas.width * .5) - settings.fontSize * .05, (textCtx.canvas.height * .5) - settings.fontSize * .05, 0, 0, Math.PI * 2, false);
      textCtx.lineWidth = settings.fontSize * .1;
      textCtx.stroke();
    }

    var gl = soup.renderer.gl;
    var textTex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, textCtx.canvas);
    gl.bindTexture(gl.TEXTURE_2D, null);

    obj.status = false;
    obj.texture = textTex;
    obj.texture.renderWidth = w / resolutionScaler;
    obj.texture.renderHeight = h / resolutionScaler;
    settings.fontSize /= 2 * resolutionScaler; // render at a higher resolution
  }

  obj.text = text;
  for (var e in settings) obj.settings[e] = settings[e];

  obj.dynamicsUpdate = function () {
    var settings = this.settings;
    if (settings.hasOwnProperty("atomSelection")) {
      var info = molmil.calcCenter(settings.atomSelection);
      var pos = info[0], size = info[1], atoms = info[2], names = info[3];
      if (settings.atomSelection.length == 1) size += settings.atomSelection[0].radius || molmil.configBox.vdwR[settings.atomSelection[0].element] || 1.5;
      else size += 1.5;
      if (molmil.defaultSettings_label.label_atom_center) {
        var nearest = [1e99, -1], dx, dy, dz, r2;
        if (molmil.defaultSettings_label.label_atom_center == "all") {
          for (var i = 0; i < atoms.length; i++) {
            dx = atoms[i][0] - pos[0]; dy = atoms[i][1] - pos[1]; dz = atoms[i][2] - pos[2];
            r2 = dx * dx + dy * dy + dz * dz;
            if (r2 < nearest[0]) nearest = [r2, i];
          }
        }
        else {
          for (var i = 0; i < atoms.length; i++) {
            if (names[i] != molmil.defaultSettings_label.label_atom_center) continue
            dx = atoms[i][0] - pos[0]; dy = atoms[i][1] - pos[1]; dz = atoms[i][2] - pos[2];
            r2 = dx * dx + dy * dy + dz * dz;
            if (r2 < nearest[0]) nearest = [r2, i];
          }
        }
        if (nearest[1] != -1) {
          pos = atoms[nearest[1]];
          console.log(settings.atomSelection[nearest[1]]);
        }
      }
      if (molmil.defaultSettings_label.alwaysFront) size = 0;
      settings.xyz = pos;
      if (settings.hasOwnProperty("_dx")) settings.dx = settings._dx + size;
      else if (settings.hasOwnProperty("_dy")) settings.dy = settings._dy + size;
      else settings.dz = (settings.hasOwnProperty("_dz") ? settings._dz : 0) + size;
      this.status = false;
    }
  };
  obj.dynamicsUpdate();

  if (soup instanceof molmil.viewer && soup.UI) soup.UI.resetRM();
  soup.canvas.update = true;

  return obj;
}

molmil.mergeStructuresToModels = function (entries) { // merges multiple structures into separate models
}

molmil.splitModelsToStructures = function (entry) { // splits multiple models into separate structures
}

molmil.showNearbyResidues = function (obj, r, soup) {
  var atomList = molmil.fetchNearbyAtoms(obj, r, null, soup);
  var processed = [], res;
  for (var i = 0; i < atomList.length; i++) {
    res = atomList[i].molecule;
    if (processed.indexOf(res) != -1) continue;
    molmil.displayEntry(res, molmil.displayMode_Stick);
    processed.push(res);
  }
  soup.renderer.initBuffers();
  soup.renderer.canvas.update = true;
  return processed;
}

molmil.fetchNearbyAtoms = function (obj, r, atomList, soup) {
  if (atomList === undefined || atomList === null) atomList = [];
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;

  if (obj instanceof Array) {
    for (var i = 0; i < obj.length; i++) molmil.fetchNearbyAtoms(obj[i], r, atomList, soup);
    return atomList;
  }


  if (obj instanceof molmil.entryObject) {
    for (var i = 0; i < obj.chains; i++) molmil.fetchNearbyAtoms(obj.chains[i], r, atomList, soup);
    return atomList;
  }

  var atoms_, atoms = [], modelsXYZ2;
  if (obj instanceof molmil.chainObject) {
    atoms_ = obj.atoms;
    modelsXYZ2 = obj.modelsXYZ[soup.renderer.modelId];
  }
  else if (obj instanceof molmil.molObject) {
    atoms_ = obj.atoms;
    modelsXYZ2 = obj.chain.modelsXYZ[soup.renderer.modelId];
  }
  else if (obj instanceof molmil.atomObject) {
    atoms_ = [obj];
    modelsXYZ2 = obj.chain.modelsXYZ[soup.renderer.modelId];
  }
  else return atomList;

  var i, j, c, r2 = r * r, xyz1, xyz2, atom1 = [0.0, 0.0, 0.0], atom2 = [0.0, 0.0, 0.0], modelsXYZ1, x, y, z, rr;

  for (j = 0; j < atoms_.length; j++) { if (atoms_[j].element != "H") atoms.push(atoms_[j]); }

  for (c = 0; c < soup.chains.length; c++) {
    modelsXYZ1 = soup.chains[c].modelsXYZ[soup.renderer.modelId];
    for (i = 0; i < soup.chains[c].atoms.length; i++) {
      if (soup.chains[c].atoms[i].element == "H" || atoms.indexOf(soup.chains[c].atoms[i]) != -1) continue;
      xyz1 = soup.chains[c].atoms[i].xyz;
      atom1[0] = modelsXYZ1[xyz1];
      atom1[1] = modelsXYZ1[xyz1 + 1];
      atom1[2] = modelsXYZ1[xyz1 + 2];

      for (j = 0; j < atoms.length; j++) {
        xyz2 = atoms[j].xyz;
        atom2[0] = modelsXYZ2[xyz2];
        atom2[1] = modelsXYZ2[xyz2 + 1];
        atom2[2] = modelsXYZ2[xyz2 + 2];

        x = atom1[0] - atom2[0]; y = atom1[1] - atom2[1]; z = atom1[2] - atom2[2];
        rr = x * x + y * y + z * z;
        if (rr < r2) {
          atomList.push(soup.chains[c].atoms[i]);
          break;
        }

      }

    }
  }

  return atomList;
}

molmil.atoms2objects = function (atomList, exclude) {
  exclude = exclude || [];
  var resRef = {}, i, resList = [];
  for (i = 0; i < exclude.length; i++) resRef[exclude[i].meta.idnr] = false;
  for (i = 0; i < atomList.length; i++) { if (!resRef.hasOwnProperty(atomList[i].chain.entry.meta.idnr)) resRef[atomList[i].chain.entry.meta.idnr] = atomList[i].chain.entry; }
  for (i in resRef) { if (resRef[i] != false) resList.push(resRef[i]); }
  return resList;
}

molmil.atoms2chains = function (atomList, exclude) {
  exclude = exclude || [];
  var resRef = {}, i, resList = [];
  for (i = 0; i < exclude.length; i++) resRef[exclude[i].CID] = false;
  for (i = 0; i < atomList.length; i++) { if (!resRef.hasOwnProperty(atomList[i].chain.CID)) resRef[atomList[i].chain.CID] = atomList[i].chain; }
  for (i in resRef) { if (resRef[i] != false) resList.push(resRef[i]); }
  return resList;
}

molmil.atoms2residues = function (atomList, exclude) {
  exclude = exclude || [];
  var resRef = {}, i, resList = [];
  for (i = 0; i < exclude.length; i++) resRef[exclude[i].MID] = false;
  for (i = 0; i < atomList.length; i++) { if (!resRef.hasOwnProperty(atomList[i].molecule.MID)) resRef[atomList[i].molecule.MID] = atomList[i].molecule; }
  for (i in resRef) { if (resRef[i] != false) resList.push(resRef[i]); }
  return resList;
}

// make some way to make this work better with async stuff
// even if we have to do something which crappy browsers (=safari) don't like...

molmil.conditionalPluginLoad = function (URL, callBack, self, argList, async) {
  var head = document.getElementsByTagName("head")[0];
  if (!head.scripts || !head.scripts[URL] || !head.scripts[URL].loaded) {
    if (callBack || async == false) molmil.loadPlugin(URL, callBack, self, argList, async);
    return false;
  }
  return true;
};

molmil.loadPlugin = function (URL, callBack, self, argList, async) {
  var head = document.getElementsByTagName("head")[0];
  head.scripts = head.scripts || {}; // tracker for plugins => so it's not downloaded twice while the browser is processing the code...
  if (!head.scripts.hasOwnProperty(URL)) {
    var script = head.scripts[URL] = head.pushNode("script");
    script.addCallback = function (callback) { this.callBacks.push(callback); if (this.loaded) this.OnDone(); };
    script.callBacks = []; script.loaded = false;
    script.onload = script.onreadystatechange = function () {
      this.loaded = true; var F;
      while (this.callBacks.length) {
        var callback = this.callBacks.pop();
        callback[0].apply(callback[1], callback[2]);
      }
    };
    if (!async) {
      var request = script.xhr = new molmil_dep.CallRemote("GET"); request.ASYNC = false; request.script = script;
      request.OnDone = function () {
        this.script.text = this.request.responseText; this.script.onload();
      };
      request.Send(URL);
    }
    else {
      script.src = URL;
    }
  }
  if (callBack) {
    if (head.scripts[URL].loaded) return callBack.apply(self, argList);
    else head.scripts[URL].addCallback([callBack, self, argList]);
  }
}

molmil.colorBfactor = function (selection, soup, colorFunc) {
  if (colorFunc === undefined) {
    colorFunc = function (inp) {
      var rgba = molmil.hslToRgb123(inp * (2 / 3), 1.0, 0.5); rgba[0] *= 255; rgba[1] *= 255; rgba[2] *= 255; rgba.push(255);
      return rgba;
    };
  }
  var values = []
  for (var i = 0; i < selection.length; i++) values.push(selection[i].Bfactor);
  if (molmil.configBox.bfactor_low != undefined) var min = molmil.configBox.bfactor_low;
  else var min = Math.min.apply(null, values);
  if (molmil.configBox.bfactor_high != undefined) var max = molmil.configBox.bfactor_high;
  else var max = Math.max.apply(null, values);
  if (molmil.configBox.inverseBfacClr) { var tmp = min; min = max; max = tmp; }
  var diffInv = 1. / (max - min), tmp;
  for (var i = 0; i < selection.length; i++) {
    tmp = 1 - ((values[i] - min) * diffInv); ///TODO
    selection[i].rgba = colorFunc(tmp);
    if (selection[i].molecule.CA == selection[i]) selection[i].molecule.rgba = selection[i].rgba;
  }
  soup.renderer.rebuildRequired = true;
}

molmil.formatList = {}
molmil.formatList[".pdb"] = molmil.formatList[".ent"] = "pdb";
molmil.formatList[".mmtf"] = "mmtf";
molmil.formatList[".cif"] = "mmcif";
molmil.formatList[".gro"] = "gro";
molmil.formatList[".trr"] = "gromacs-trr";
molmil.formatList[".xtc"] = "gromacs-xtc";
molmil.formatList[".cor"] = molmil.formatList[".cod"] = "psygene-traj";
molmil.formatList[".mnt"] = "presto-mnt";
molmil.formatList[".mpbf"] = "mpbf";
molmil.formatList[".ccp4"] = "ccp4";
molmil.formatList[".mdl"] = molmil.formatList[".mol"] = molmil.formatList[".sdl"] = molmil.formatList[".sdf"] = "mdl";
molmil.formatList[".mol2"] = "mol2";
molmil.formatList[".xyz"] = "xyz";
molmil.formatList[".obj"] = "obj";
molmil.formatList[".wrl"] = "wrl";
molmil.formatList[".stl"] = "stl";
molmil.formatList[".ply"] = "ply";
molmil.formatList[".mjs"] = "mjs";

molmil.guess_format = function (name) {
  var format = null;
  var fname = name.split("/").slice(-1)[0].replace(".gz", "");
  for (var ext in molmil.formatList) {
    if (fname.substr(fname.length - ext.length) == ext) { format = molmil.formatList[ext]; break; }
  }
  return format;
};

molmil.loadFilePointer = function (fileObj, func, canvas) {
  fileObj.onload = function (e) {
    func(e.target.result, this.filename);
    canvas.molmilViewer.downloadInProgress--;
  }
  canvas.molmilViewer.downloadInProgress++;
  fileObj.readAsText(fileObj.fileHandle);
  return true;
}

/*



molmil.loadPlugin = async function(URL, callBack, self, argList) {
  var head = document.getElementsByTagName("head")[0];
  head.scripts = head.scripts || {}; // tracker for plugins => so it's not downloaded twice while the browser is processing the code...
  
  //if(argList)console.log(URL, argList[argList.length-2], head.scripts.hasOwnProperty(URL));
  if (! head.scripts.hasOwnProperty(URL)) {
    head.scripts[URL] = null;
    var request = new molmil_dep.CallRemote("GET"); request.ASYNC = false; request.callBack = callBack; request.self = self; request.argList = argList; request.Send(URL);
    head.scripts[URL] = head.pushNode("script");
    head.scripts[URL].innerHTML = request.request.responseText;
  }
  
  if (callBack) {
    await sleep(100);
    return callBack.apply(self, argList);
  }
}

*/

molmil.pointerLoc_setup = function (canvas) {
  molmil.activeCanvas = canvas;
  //if (document.pointerLockElement === canvas) 
  document.addEventListener("mousemove", molmil.pointerLock_update, false);
  //else document.removeEventListener("mousemove", molmil.pointerLock_update, false);

}
molmil.pointerLock_update = function (e) {
  var activeCanvas = molmil.activeCanvas;


  if (e.buttons == 2 || (e.buttons == 1 && e.shiftKey) || e.buttons == 3) {
    activeCanvas.renderer.TransX += (e.movementX) * .5;
    activeCanvas.renderer.TransY += (e.movementY) * .5;
  }
  else if (e.buttons == 1) {
    activeCanvas.renderer.heading += e.movementX;
    activeCanvas.renderer.pitch += e.movementY;
  }
  else if (e.buttons == 4) {
    activeCanvas.renderer.TransZ += e.movementX + e.movementY;
  }


  activeCanvas.update = true;
};


molmil.startWebVR = function (that) {
  //canvas.requestPointerLock(that.canvas);

  molmil.vrDisplays[0].requestPresent([{ source: that.canvas }]).then(function () {
    molmil.vrDisplay = molmil.vrDisplays[0];
    that.renderer.reinitRenderer();
    //molmil.vrDisplay.resetPose(); // deprecated
    var leftEye = molmil.vrDisplay.getEyeParameters('left');
    var rightEye = molmil.vrDisplay.getEyeParameters('right');
    that.renderer.width = that.width = that.canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
    that.renderer.height = that.height = that.canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);
    molmil.configBox.stereoMode = 3;
    that.renderer.camera.z = that.calcZ();

    //molmil.pointerLoc_setup(that.canvas);

    window.addEventListener('vrdisplaypresentchange', function () {
      if (molmil.vrDisplay.isPresenting) return;
      molmil.configBox.stereoMode = 0;
      that.canvas.update = true; // draw scene
    });
    that.canvas.update = true; // draw scene
  });
};

// END

molmil.autoSetup = function (options, canvas) {
  options = options || {};
  if (!options.hasOwnProperty("enable")) options.enable = ["ui", "cli", "cli-hash", "drag-n-drop"];

  if (!canvas) {
    for (var i = 0; i < molmil.canvasList.length; i++) molmil.autoSetup(options, molmil.canvasList[i]);
    var viewers = document.getElementsByClassName("molmilViewer");
    if (viewers.length == 0) viewers = [document.getElementById("molmilViewer")];
    for (var i = 0; i < viewers.length; i++) if (viewers[i] && !viewers[i].molmilViewer) canvas = molmil.autoSetup(options, viewers[i]);
    return canvas;
  }

  if (!canvas.molmilViewer) molmil.createViewer(canvas);
  if (canvas.setupDone) return;


  if (options.enable.includes("cli") && !canvas.commandLine) {
    var cli = new molmil.commandLine(canvas);
    if (options.environment) { for (var e in options.environment) cli.environment[e] = options.environment[e]; }

    if (options.enable.includes("cli-hash")) {
      var hash = window.location.hash ? window.location.hash.substr(1) : "";
      if (hash) cli.environment.console.runCommand(decodeURIComponent(hash));

      window.onhashchange = function () {
        var hash = window.location.hash ? window.location.hash.substr(1) : "";
        if (hash) { molmil.clear(canvas); cli.environment.console.runCommand(decodeURIComponent(hash)); }
      }
    }

    if (window.onkeyup == null) {
      var lastPress = 0;
      window.onkeyup = function (ev) {
        if (ev.keyCode == 27) {
          var now = (new Date()).getTime();
          if (now - lastPress < 250) cli.icon.onclick();
          lastPress = now;
        }
      }
    }
  }
  else if (options.enable.includes("cli-hash") && !canvas.commandLine) {
    var hash = window.location.hash ? window.location.hash.substr(1) : "";
    if (hash) {
      var cli = new molmil.commandLine(canvas);
      if (options.environment) { for (var e in options.environment) cli.environment[e] = options.environment[e]; }
      cli.environment.console.runCommand(decodeURIComponent(hash));
      cli.consoleBox.style.display = "none";
    }
  }

  var wait = false;
  if (options.enable.includes("ui") && !molmil.UI) { wait = true; molmil.loadPlugin(molmil.settings.src + "plugins/UI.js", null, null, null, true); }
  if (wait) return molmil_dep.asyncStart(molmil.autoSetup, [options, canvas], this, 10);

  if (options.enable.includes("ui")) {
    canvas.molmilViewer.UI = new molmil.UI(canvas.molmilViewer);
    canvas.molmilViewer.UI.init();
    canvas.molmilViewer.animation = new molmil.animationObj(canvas.molmilViewer);
  }

  if (options.enable.includes("drag-n-drop")) molmil.bindCanvasInputs(canvas);

  try { var commandBuffer = window.sessionStorage.commandBuffer ? JSON.parse(window.sessionStorage.commandBuffer) : []; }
  catch (e) { var commandBuffer = []; }
  for (var i = 0; i < commandBuffer.length; i++) processExternalCommand(commandBuffer[i]);

  canvas.setupDone = true;
  if (options.callback) options.callback();
};

window.addEventListener("message", function (e) {
  try { var commandBuffer = window.sessionStorage.commandBuffer ? JSON.parse(window.sessionStorage.commandBuffer) : []; }
  catch (e) { var commandBuffer = []; }
  e.data.event = e;
  processExternalCommand(e.data, commandBuffer);
  try { window.sessionStorage.commandBuffer = JSON.stringify(commandBuffer); }
  catch (e) { }
}, false);

function processExternalCommand(cmd, commandBuffer) {
  var canvas = molmil.fetchCanvas();
  if (cmd.hasOwnProperty("ping") && commandBuffer !== undefined) {
    if (!canvas || !canvas.setupDone) return;
    cmd.event.source.postMessage({ "pong": cmd.ping }, cmd.event.origin);
  }
  ///////////console.log(cmd);
  if (cmd.hasOwnProperty("extraREST")) {
    var soup = canvas.molmilViewer;
    for (var e in cmd.extraREST) soup.extraREST[e] = soup.extraREST[e];
    if (commandBuffer !== undefined && !cmd.nobuffer) commandBuffer.push({ "extraREST": cmd.extraREST });
  }
  if (cmd.hasOwnProperty("extraRESTHeaders")) {
    var soup = canvas.molmilViewer;
    for (var e in cmd.extraRESTHeaders) soup.extraRESTHeaders[e] = soup.extraRESTHeaders[e];
    if (commandBuffer !== undefined && !cmd.nobuffer) commandBuffer.push({ "extraRESTHeaders": cmd.extraRESTHeaders });
  }
  if (cmd.hasOwnProperty("__cwd__")) {
    var soup = canvas.molmilViewer;
    soup.__cwd__ = cmd.__cwd__;
    if (commandBuffer !== undefined && !cmd.nobuffer) commandBuffer.push({ "__cwd__": cmd.__cwd__ });
  }
  if (cmd.hasOwnProperty("load")) {
    var soup = canvas.molmilViewer;
    soup.loadStructureData(cmd.load[0], cmd.load[1], cmd.load[2]);
    if (commandBuffer !== undefined && !cmd.nobuffer) commandBuffer.push({ "load": cmd.load });
  }
  if (cmd.hasOwnProperty("run-command")) {
    canvas.commandLine.environment.console.runCommand(cmd["run-command"]);
    //runCommand
    if (commandBuffer !== undefined && !cmd.nobuffer) commandBuffer.push({ "run-command": cmd["run-command"] });
  }
  if (cmd.hasOwnProperty("custom") && window.hasOwnProperty(cmd["custom"][0])) {
    molmil_dep.asyncStart(window[cmd["custom"][0]], cmd["custom"][1], null, 0);
    if (commandBuffer !== undefined && !cmd.nobuffer) commandBuffer.push({ "custom": cmd["custom"] });
  }
};

molmil.bindCanvasInputs = function (canvas) {
  return molmil.loadPlugin(molmil.settings.src + "plugins/UI.js", this.bindCanvasInputs, this, [canvas]);
}

molmil.promode_elastic = function (id, mode, type, soup) {
  soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  if (type == 1) {
    soup.loadStructure(molmil.settings.promodeE_base_structure_url.replace("__ID__", id), 4);
    soup.loadStructure(molmil.settings.promodeE_mode_vectors_url.replace("__ID__", id).replace("__MODE__", mode), 5);
  }
  else {
    soup.loadStructure(molmil.settings.promodeE_animation_url.replace("__ID__", id).replace("__MODE__", mode), 4, function (soup, struc) {
      molmil.displayEntry(struc, soup.AID > 1e5 ? 5 : 1);
      molmil.colorEntry(struc, 1);
      soup.animation.motionMode = 3;
      soup.animation.play();
    });
  }
}

molmil.normalFromMat3 = function (a, out) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = 0,
    a10 = a[3], a11 = a[4], a12 = a[5], a13 = 0,
    a20 = a[6], a21 = a[7], a22 = a[8], a23 = 0,
    a30 = 0, a31 = 0, a32 = 0, a33 = 1,
    b00 = a00 * a11 - a01 * a10,
    b01 = a00 * a12 - a02 * a10,
    b02 = a00 * a13 - a03 * a10,
    b03 = a01 * a12 - a02 * a11,
    b04 = a01 * a13 - a03 * a11,
    b05 = a02 * a13 - a03 * a12,
    b06 = a20 * a31 - a21 * a30,
    b07 = a20 * a32 - a22 * a30,
    b08 = a20 * a33 - a23 * a30,
    b09 = a21 * a32 - a22 * a31,
    b10 = a21 * a33 - a23 * a31,
    b11 = a22 * a33 - a23 * a32,
    // Calculate the determinant
    det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
};

molmil.transformObject = function (obj, matrix) {
  var soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer;
  if (obj instanceof molmil.polygonObject) {
    var normalMat = mat3.normalFromMat4(mat3.create(), matrix);
    var xyzin = vec3.create(), xyzout = vec3.create(), COR = [0, 0, 0, 0], geomRanges = [1e99, -1e99, 1e99, -1e99, 1e99, -1e99];
    var vertexBuffer = obj.data.vertexBuffer;

    for (var i = 0; i < vertexBuffer.length; i += 7) {
      xyzin[0] = vertexBuffer[i]; xyzin[1] = vertexBuffer[i + 1]; xyzin[2] = vertexBuffer[i + 2];
      vec3.transformMat4(xyzout, xyzin, matrix);
      vertexBuffer[i] = xyzout[0]; vertexBuffer[i + 1] = xyzout[1]; vertexBuffer[i + 2] = xyzout[2];
      COR[0] += xyzout[0]; COR[1] += xyzout[1]; COR[2] += xyzout[2]; COR[3] += 1;

      xyzin[0] = vertexBuffer[i + 3]; xyzin[1] = vertexBuffer[i + 4]; xyzin[2] = vertexBuffer[i + 5];
      vec3.transformMat3(xyzout, xyzin, normalMat);
      vertexBuffer[i + 3] = xyzout[0]; vertexBuffer[i + 4] = xyzout[1]; vertexBuffer[i + 5] = xyzout[2];


      if (xyzin[0] < geomRanges[0]) geomRanges[0] = xyzin[0];
      if (xyzin[0] > geomRanges[1]) geomRanges[1] = xyzin[0];

      if (xyzin[1] < geomRanges[2]) geomRanges[2] = xyzin[1];
      if (xyzin[1] > geomRanges[3]) geomRanges[3] = xyzin[1];

      if (xyzin[2] < geomRanges[4]) geomRanges[4] = xyzin[2];
      if (xyzin[2] > geomRanges[5]) geomRanges[5] = xyzin[2];
    }
    obj.meta.COR = COR;
    obj.meta.geomRanges = geomRanges;
    obj.programs[0].setBuffers(vertexBuffer, obj.data.indexBuffer);
  }

  soup.calculateCOG();
}

molmil.cloneObject = function (obj, settings) {
  var soup = soup || molmil.cli_soup || molmil.fetchCanvas().molmilViewer, newObj = null;
  settings = settings || {};
  if (obj instanceof molmil.polygonObject) {
    newObj = new molmil.polygonObject({ filename: obj.meta.filename + ".copy", COR: obj.meta.COR, geomRanges: obj.meta.geomRanges }); soup.structures.push(newObj);
    var vertexBuffer = new Float32Array(obj.data.vertexBuffer.length);
    var indexBuffer = new Int32Array(obj.data.indexBuffer.length);
    for (var i = 0; i < vertexBuffer.length; i++) vertexBuffer[i] = obj.data.vertexBuffer[i];
    for (var i = 0; i < indexBuffer.length; i++) indexBuffer[i] = obj.data.indexBuffer[i];

    for (var e in obj.programs[0].settings) { if (!(e in settings)) settings[e] = obj.programs[0].settings[e]; }

    var program = molmil.geometry.build_simple_render_program(vertexBuffer, indexBuffer, soup.renderer, settings);
    soup.renderer.addProgram(program);
    newObj.programs.push(program);

    // also add an entry to the structures menu for easy enabling/disabling
    newObj.options = [[name, program]];


    newObj.data = {};
    newObj.data.vertexBuffer = vertexBuffer;
    newObj.data.indexBuffer = indexBuffer;
    newObj.data.vertexSize = obj.data.vertexSize;
    newObj.data.vertices_offset = obj.data.vertices_offset;

    soup.calculateCOG();
  }
  return newObj;
}

molmil.orient = function (atoms, soup, xyzs) {
  // if no atoms supplied, do something...

  xyzs = xyzs || [];
  var c, m, a, f, modelsXYZ;

  var COG = [0.0, 0.0, 0.0, 0];

  // also take into account any BUs...

  if (atoms) {
    for (a = 0; a < atoms.length; a++) {
      chain = atoms[a].chain;
      for (f = 0; f < chain.modelsXYZ.length; f++) {
        modelsXYZ = chain.modelsXYZ[f];
        xyzs.push([modelsXYZ[atoms[a].xyz], modelsXYZ[atoms[a].xyz + 1], modelsXYZ[atoms[a].xyz + 2]]);
      }
    }
  }
  else if (!xyzs.length) {
    var chains = soup.chains;
    for (c = 0; c < chains.length; c++) {
      chain = chains[c];

      for (f = 0; f < chain.modelsXYZ.length; f++) {
        if (!molmil.configBox.orientMODELs && f > 0) break;
        modelsXYZ = chain.modelsXYZ[f];

        for (m = 0; m < chain.molecules.length; m++) {
          if (chain.molecules[m].water) continue;
          if (!chain.molecules[m].CA || chain.molecules[m].ligand) {
            for (a = 0; a < chain.molecules[m].atoms.length; a++) xyzs.push([modelsXYZ[chain.molecules[m].atoms[a].xyz], modelsXYZ[chain.molecules[m].atoms[a].xyz + 1], modelsXYZ[chain.molecules[m].atoms[a].xyz + 2]]);
          }
          else xyzs.push([modelsXYZ[chain.molecules[m].CA.xyz], modelsXYZ[chain.molecules[m].CA.xyz + 1], modelsXYZ[chain.molecules[m].CA.xyz + 2]]);
        }
      }
    }
  }

  for (n = 0; n < xyzs.length; n++) {
    COG[0] += xyzs[n][0];
    COG[1] += xyzs[n][1];
    COG[2] += xyzs[n][2];
    COG[3] += 1;
  }
  COG[0] /= COG[3]; COG[1] /= COG[3]; COG[2] /= COG[3];

  var n, i, j, C_ij = [[0.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.0, 0.0, 0.0]], x, y, z, r2, maxRadius = 0;

  for (n = 0; n < xyzs.length; n++) {
    x = xyzs[n][0] - COG[0]; y = xyzs[n][1] - COG[1]; z = xyzs[n][2] - COG[2];

    r2 = x * x + y * y + z * z;
    if (r2 > maxRadius) maxRadius = r2;

    C_ij[0][0] += x * x; C_ij[1][1] += y * y; C_ij[2][2] += z * z;
    C_ij[0][1] += x * y; C_ij[0][2] += x * z; C_ij[1][2] += y * z;

  }

  var Ninv = 1. / xyzs.length;
  C_ij[0][0] *= Ninv; C_ij[1][1] *= Ninv; C_ij[2][2] *= Ninv;
  C_ij[0][1] = C_ij[1][0] = C_ij[0][1] * Ninv; C_ij[0][2] = C_ij[2][0] = C_ij[0][2] * Ninv; C_ij[1][2] = C_ij[2][1] = C_ij[1][2] * Ninv;

  var A = new Float64Array(9);
  A[0] = C_ij[0][0]; A[1] = C_ij[0][1]; A[2] = C_ij[0][2];
  A[3] = C_ij[1][0]; A[4] = C_ij[1][1]; A[5] = C_ij[1][2];
  A[6] = C_ij[2][0]; A[7] = C_ij[2][1]; A[8] = C_ij[2][2];

  var maxIter = 1e4;
  var tolerance = 1e-9, i = 0, lambdaOld = 0, lambda = 0, z = new Float64Array(3);

  var powerIteration_vec3 = function (v) {
    i = 0; lambdaOld = 0;
    lambda = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    v[0] /= lambda; v[1] /= lambda; v[2] /= lambda;

    while (i <= maxIter) {
      vec3.transformMat3(z, v, A);
      lambda = Math.sqrt(z[0] * z[0] + z[1] * z[1] + z[2] * z[2]);
      v[0] = z[0] / lambda; v[1] = z[1] / lambda; v[2] = z[2] / lambda;
      if (Math.abs((lambda - lambdaOld) / lambda) < tolerance) break;
      lambdaOld = lambda;
      i++;
    }
  }

  var v1 = [1, 1, 1]; powerIteration_vec3(v1);
  if (vec3.dot([Math.abs(v1[0]), Math.abs(v1[1]), Math.abs(v1[2])], v1) > 0) vec3.negate(v1, v1);


  var sf = vec3.squaredLength(z) / lambda;
  var vvT = new Float64Array(9);
  vvT[0] = v1[0] * v1[0] * sf; vvT[1] = v1[0] * v1[1] * sf; vvT[2] = v1[0] * v1[2] * sf;
  vvT[3] = v1[1] * v1[0] * sf; vvT[4] = v1[1] * v1[1] * sf; vvT[5] = v1[1] * v1[2] * sf;
  vvT[6] = v1[2] * v1[0] * sf; vvT[7] = v1[2] * v1[1] * sf; vvT[8] = v1[2] * v1[2] * sf;
  A[0] -= vvT[0]; A[1] -= vvT[1]; A[2] -= vvT[2]; A[3] -= vvT[3]; A[4] -= vvT[4]; A[5] -= vvT[5]; A[6] -= vvT[6]; A[7] -= vvT[7]; A[8] -= vvT[8];

  var v2 = [1, 1, 1]; powerIteration_vec3(v2);
  if (vec3.dot([Math.abs(v2[0]), Math.abs(v2[1]), Math.abs(v2[2])], v2) > 0) vec3.negate(v2, v2);

  var axis1 = [1, 0, 0]; vec3.normalize(axis1, axis1);
  var axis2 = [0, 1, 0]; vec3.normalize(axis2, axis2);

  var cross1 = vec3.cross(vec3.create(), v1, axis1);
  var stage1 = mat4.create(); mat4.fromRotation(stage1, vec3.angle(v1, axis1), cross1);

  var v2p = vec3.transformMat4(vec3.create(), v2, stage1);
  var cross2 = vec3.cross(vec3.create(), v2p, axis2);

  var stage2 = mat4.create(); mat4.fromRotation(stage2, vec3.angle(v2p, axis2), cross2);

  var matrix = mat4.multiply(mat4.create(), stage2, stage1);
  if (!isNaN(sf)) mat4.getRotation(soup.renderer.camera.QView, matrix);

  if (atoms && atoms.length) soup.calculateCOG(atoms);

  var mx = Math.sqrt(maxRadius) * 2 + 5;

  while (true) {
    if (molmil.configBox.projectionMode == 1) {
      var zmove = ((mx / Math.sin(molmil.configBox.camera_fovy * (Math.PI / 180)))), aspect = soup.renderer.height / soup.renderer.width;
      if (aspect > 1) zmove *= aspect;
      soup.renderer.camera.z = -zmove;
    }
    else if (molmil.configBox.projectionMode == 2) soup.renderer.camera.z = -((mx / Math.min(soup.renderer.width, soup.renderer.height)) * molmil.configBox.zFar * (.5)) - molmil.configBox.zNear - 1;
    if (Math.abs(soup.renderer.camera.z) < molmil.configBox.zFar * .5) break;
    molmil.configBox.zFar = Math.abs(soup.renderer.camera.z) * 3;
    soup.renderer.resizeViewPort();
  }
}

molmil.superpose = function (A, B, C, modelId, iterate) {
  if (!molmil.toBigEndian32) return molmil.loadPlugin(molmil.settings.src + "plugins/md-anal.js", this.superpose, this, [A, B, C, modelId, iterate]);
  modelId = modelId || 0;

  var i, atom, atom2, xyz = vec3.create(), xyz2 = vec3.create(), rotationMatrix, Rs = new Array(A.length), old_selIdxs = A.map(function (x, i) { return i; });

  var Ap = A, Bp = B, selIdxs, initialRMSD = undefined;
  while (true) {
    var data = molmil.calcRMSD(Ap, Bp, true);
    if (!data) return;
    if (initialRMSD == undefined) initialRMSD = data[0];
    rotationMatrix = data[1];
    if (!iterate || modelId != 0) break;

    var iterate2 = iterate * iterate, Rs = [];

    selIdxs = [];
    for (i = 0; i < B.length; i++) {
      atom = B[i];
      atom2 = A[i];

      xyz[0] = atom.chain.modelsXYZ[modelId][atom.xyz] - data[3][0];
      xyz[1] = atom.chain.modelsXYZ[modelId][atom.xyz + 1] - data[3][1];
      xyz[2] = atom.chain.modelsXYZ[modelId][atom.xyz + 2] - data[3][2];
      vec3.transformMat4(xyz, xyz, rotationMatrix);
      xyz[0] += data[2][0];
      xyz[1] += data[2][1];
      xyz[2] += data[2][2];

      xyz2[0] = atom2.chain.modelsXYZ[modelId][atom2.xyz];
      xyz2[1] = atom2.chain.modelsXYZ[modelId][atom2.xyz + 1];
      xyz2[2] = atom2.chain.modelsXYZ[modelId][atom2.xyz + 2];

      Rs[i] = Math.pow(xyz[0] - xyz2[0], 2) + Math.pow(xyz[1] - xyz2[1], 2) + Math.pow(xyz[2] - xyz2[2], 2);
    }
    // at least try to get a good alignment for part of the structure (if the structure partially mismatches (domain level, not loop leve), but sequence is the same, we get a bad initial superposition; using this method, we will get a good superposition for the parts that match)
    var minScore2 = Rs.slice().sort(function (a, b) { return a < b ? -1 : 1; })[parseInt(Rs.length * .25)];
    if (minScore2 > iterate2) iterate2 = minScore2;
    for (i = 0; i < B.length; i++) {
      if (Rs[i] < iterate2) selIdxs.push(i);
    }

    if (selIdxs.length < 3) break;
    if (selIdxs.length == old_selIdxs.length && JSON.stringify(selIdxs) == JSON.stringify(old_selIdxs)) break;
    Ap = selIdxs.map(function (i) { return A[i]; });
    Bp = selIdxs.map(function (i) { return B[i]; });
    old_selIdxs = selIdxs;
  }

  for (i = 0; i < C.length; i++) {
    atom = C[i];
    xyz[0] = atom.chain.modelsXYZ[modelId][atom.xyz] - data[3][0];
    xyz[1] = atom.chain.modelsXYZ[modelId][atom.xyz + 1] - data[3][1];
    xyz[2] = atom.chain.modelsXYZ[modelId][atom.xyz + 2] - data[3][2];
    vec3.transformMat4(xyz, xyz, rotationMatrix);
    atom.chain.modelsXYZ[modelId][atom.xyz] = xyz[0] + data[2][0];
    atom.chain.modelsXYZ[modelId][atom.xyz + 1] = xyz[1] + data[2][1];
    atom.chain.modelsXYZ[modelId][atom.xyz + 2] = xyz[2] + data[2][2];
  }

  return { initial_rmsd: initialRMSD, rmsd: data[0], aligned_indices: selIdxs };
};

molmil.alignInfo = {};

molmil.align = function (A, B, options) {
  // https://github.com/CDCgov/bioseq-js/blob/master/dist/bioseq.js
  if (!window.bioseq) return molmil.loadPlugin("https://raw.githubusercontent.com/CDCgov/bioseq-js/master/dist/bioseq.js", molmil.align, molmil, [A, B, options]);
  options = options || {};
  if (!bioseq.amino_acids) {
    var blosum62 = { "*": { "*": 1, "A": -4, "C": -4, "B": -4, "E": -4, "D": -4, "G": -4, "F": -4, "I": -4, "H": -4, "K": -4, "M": -4, "L": -4, "N": -4, "Q": -4, "P": -4, "S": -4, "R": -4, "T": -4, "W": -4, "V": -4, "Y": -4, "X": -4, "Z": -4 }, "A": { "*": -4, "A": 4, "C": 0, "B": -2, "E": -1, "D": -2, "G": 0, "F": -2, "I": -1, "H": -2, "K": -1, "M": -1, "L": -1, "N": -2, "Q": -1, "P": -1, "S": 1, "R": -1, "T": 0, "W": -3, "V": 0, "Y": -2, "X": 0, "Z": -1 }, "C": { "*": -4, "A": 0, "C": 9, "B": -3, "E": -4, "D": -3, "G": -3, "F": -2, "I": -1, "H": -3, "K": -3, "M": -1, "L": -1, "N": -3, "Q": -3, "P": -3, "S": -1, "R": -3, "T": -1, "W": -2, "V": -1, "Y": -2, "X": -2, "Z": -3 }, "B": { "*": -4, "A": -2, "C": -3, "B": 4, "E": 1, "D": 4, "G": -1, "F": -3, "I": -3, "H": 0, "K": 0, "M": -3, "L": -4, "N": 3, "Q": 0, "P": -2, "S": 0, "R": -1, "T": -1, "W": -4, "V": -3, "Y": -3, "X": -1, "Z": 1 }, "E": { "*": -4, "A": -1, "C": -4, "B": 1, "E": 5, "D": 2, "G": -2, "F": -3, "I": -3, "H": 0, "K": 1, "M": -2, "L": -3, "N": 0, "Q": 2, "P": -1, "S": 0, "R": 0, "T": -1, "W": -3, "V": -2, "Y": -2, "X": -1, "Z": 4 }, "D": { "*": -4, "A": -2, "C": -3, "B": 4, "E": 2, "D": 6, "G": -1, "F": -3, "I": -3, "H": -1, "K": -1, "M": -3, "L": -4, "N": 1, "Q": 0, "P": -1, "S": 0, "R": -2, "T": -1, "W": -4, "V": -3, "Y": -3, "X": -1, "Z": 1 }, "G": { "*": -4, "A": 0, "C": -3, "B": -1, "E": -2, "D": -1, "G": 6, "F": -3, "I": -4, "H": -2, "K": -2, "M": -3, "L": -4, "N": 0, "Q": -2, "P": -2, "S": 0, "R": -2, "T": -2, "W": -2, "V": -3, "Y": -3, "X": -1, "Z": -2 }, "F": { "*": -4, "A": -2, "C": -2, "B": -3, "E": -3, "D": -3, "G": -3, "F": 6, "I": 0, "H": -1, "K": -3, "M": 0, "L": 0, "N": -3, "Q": -3, "P": -4, "S": -2, "R": -3, "T": -2, "W": 1, "V": -1, "Y": 3, "X": -1, "Z": -3 }, "I": { "*": -4, "A": -1, "C": -1, "B": -3, "E": -3, "D": -3, "G": -4, "F": 0, "I": 4, "H": -3, "K": -3, "M": 1, "L": 2, "N": -3, "Q": -3, "P": -3, "S": -2, "R": -3, "T": -1, "W": -3, "V": 3, "Y": -1, "X": -1, "Z": -3 }, "H": { "*": -4, "A": -2, "C": -3, "B": 0, "E": 0, "D": -1, "G": -2, "F": -1, "I": -3, "H": 8, "K": -1, "M": -2, "L": -3, "N": 1, "Q": 0, "P": -2, "S": -1, "R": 0, "T": -2, "W": -2, "V": -3, "Y": 2, "X": -1, "Z": 0 }, "K": { "*": -4, "A": -1, "C": -3, "B": 0, "E": 1, "D": -1, "G": -2, "F": -3, "I": -3, "H": -1, "K": 5, "M": -1, "L": -2, "N": 0, "Q": 1, "P": -1, "S": 0, "R": 2, "T": -1, "W": -3, "V": -2, "Y": -2, "X": -1, "Z": 1 }, "M": { "*": -4, "A": -1, "C": -1, "B": -3, "E": -2, "D": -3, "G": -3, "F": 0, "I": 1, "H": -2, "K": -1, "M": 5, "L": 2, "N": -2, "Q": 0, "P": -2, "S": -1, "R": -1, "T": -1, "W": -1, "V": 1, "Y": -1, "X": -1, "Z": -1 }, "L": { "*": -4, "A": -1, "C": -1, "B": -4, "E": -3, "D": -4, "G": -4, "F": 0, "I": 2, "H": -3, "K": -2, "M": 2, "L": 4, "N": -3, "Q": -2, "P": -3, "S": -2, "R": -2, "T": -1, "W": -2, "V": 1, "Y": -1, "X": -1, "Z": -3 }, "N": { "*": -4, "A": -2, "C": -3, "B": 3, "E": 0, "D": 1, "G": 0, "F": -3, "I": -3, "H": 1, "K": 0, "M": -2, "L": -3, "N": 6, "Q": 0, "P": -2, "S": 1, "R": 0, "T": 0, "W": -4, "V": -3, "Y": -2, "X": -1, "Z": 0 }, "Q": { "*": -4, "A": -1, "C": -3, "B": 0, "E": 2, "D": 0, "G": -2, "F": -3, "I": -3, "H": 0, "K": 1, "M": 0, "L": -2, "N": 0, "Q": 5, "P": -1, "S": 0, "R": 1, "T": -1, "W": -2, "V": -2, "Y": -1, "X": -1, "Z": 3 }, "P": { "*": -4, "A": -1, "C": -3, "B": -2, "E": -1, "D": -1, "G": -2, "F": -4, "I": -3, "H": -2, "K": -1, "M": -2, "L": -3, "N": -2, "Q": -1, "P": 7, "S": -1, "R": -2, "T": -1, "W": -4, "V": -2, "Y": -3, "X": -2, "Z": -1 }, "S": { "*": -4, "A": 1, "C": -1, "B": 0, "E": 0, "D": 0, "G": 0, "F": -2, "I": -2, "H": -1, "K": 0, "M": -1, "L": -2, "N": 1, "Q": 0, "P": -1, "S": 4, "R": -1, "T": 1, "W": -3, "V": -2, "Y": -2, "X": 0, "Z": 0 }, "R": { "*": -4, "A": -1, "C": -3, "B": -1, "E": 0, "D": -2, "G": -2, "F": -3, "I": -3, "H": 0, "K": 2, "M": -1, "L": -2, "N": 0, "Q": 1, "P": -2, "S": -1, "R": 5, "T": -1, "W": -3, "V": -3, "Y": -2, "X": -1, "Z": 0 }, "T": { "*": -4, "A": 0, "C": -1, "B": -1, "E": -1, "D": -1, "G": -2, "F": -2, "I": -1, "H": -2, "K": -1, "M": -1, "L": -1, "N": 0, "Q": -1, "P": -1, "S": 1, "R": -1, "T": 5, "W": -2, "V": 0, "Y": -2, "X": 0, "Z": -1 }, "W": { "*": -4, "A": -3, "C": -2, "B": -4, "E": -3, "D": -4, "G": -2, "F": 1, "I": -3, "H": -2, "K": -3, "M": -1, "L": -2, "N": -4, "Q": -2, "P": -4, "S": -3, "R": -3, "T": -2, "W": 11, "V": -3, "Y": 2, "X": -2, "Z": -3 }, "V": { "*": -4, "A": 0, "C": -1, "B": -3, "E": -2, "D": -3, "G": -3, "F": -1, "I": 3, "H": -3, "K": -2, "M": 1, "L": 1, "N": -3, "Q": -2, "P": -2, "S": -2, "R": -3, "T": 0, "W": -3, "V": 4, "Y": -1, "X": -1, "Z": -2 }, "Y": { "*": -4, "A": -2, "C": -2, "B": -3, "E": -2, "D": -3, "G": -3, "F": 3, "I": -1, "H": 2, "K": -2, "M": -1, "L": -1, "N": -2, "Q": -1, "P": -3, "S": -2, "R": -2, "T": -2, "W": 2, "V": -1, "Y": 7, "X": -1, "Z": -2 }, "X": { "*": -4, "A": 0, "C": -2, "B": -1, "E": -1, "D": -1, "G": -1, "F": -1, "I": -1, "H": -1, "K": -1, "M": -1, "L": -1, "N": -1, "Q": -1, "P": -2, "S": 0, "R": -1, "T": 0, "W": -2, "V": -1, "Y": -1, "X": -1, "Z": -1 }, "Z": { "*": -4, "A": -1, "C": -3, "B": 1, "E": 4, "D": 1, "G": -2, "F": -3, "I": -3, "H": 0, "K": 1, "M": -1, "L": -3, "N": 0, "Q": 3, "P": -1, "S": 0, "R": 0, "T": -1, "W": -3, "V": -2, "Y": -2, "X": -1, "Z": 4 } };
    var alphabet = Object.keys(blosum62);
    bioseq.amino_acids = bioseq.makeAlphabetMap(alphabet.join(""), alphabet.indexOf("*"));

    var i, j, matrix = [];
    for (i = 0; i < alphabet.length; i++) {
      matrix[i] = [];
      for (j = 0; j < alphabet.length; j++) matrix[i][j] = blosum62[alphabet[i]][alphabet[j]];
    }
    bioseq.blosum62 = matrix;
  }

  if (A.molecules[0].xna) {
    var conv = { "A": "A", "C": "C", "T": "T", "G": "G", "DA": "A", "DC": "C", "DT": "T", "DG": "G", "U": "T", "DU": "T" };
    var Aseq = A.molecules.map(function (x) { return conv[x.name] || "*"; }).join("");
    var Bseq = B.molecules.map(function (x) { return conv[x.name] || "*"; }).join("");
    var rst = bioseq.align(Aseq, Bseq, true);
  }
  else {
    var conv = { "ALA": "A", "CYS": "C", "ASP": "D", "GLU": "E", "PHE": "F", "GLY": "G", "HIS": "H", "ILE": "I", "LYS": "K", "LEU": "L", "MET": "M", "ASN": "N", "PRO": "P", "GLN": "Q", "ARG": "R", "SER": "S", "THR": "T", "VAL": "V", "TRP": "W", "TYR": "Y" };
    var Aseq = A.molecules.map(function (x) { return conv[x.name] || "*"; }).join("");
    var Bseq = B.molecules.map(function (x) { return conv[x.name] || "*"; }).join("");
    var rst = bioseq.align(Aseq, Bseq, true, bioseq.blosum62, [12, 1], null, bioseq.amino_acids);
  }

  var fmt = bioseq.cigar2gaps(Aseq, Bseq, rst.position, rst.CIGAR);
  var a = rst.position, b = (rst.CIGAR[0] & 0xf) == 4 ? (rst.CIGAR[0] >> 4) : 0, Aarr = [], Barr = [], align = [];

  Aseq = "-".repeat(b) + fmt[0];
  Bseq = Bseq.substr(0, b) + fmt[1];
  b = 0;
  for (var i = 0; i < Aseq.length; i++) {
    if (Aseq[i] == "-") { b++; align.push(" "); continue; }
    if (Bseq[i] == "-") { a++; align.push(" "); continue; }
    if (A.molecules[a].CA && B.molecules[b].CA) {
      Aarr.push(A.molecules[a].CA);
      Barr.push(B.molecules[b].CA);
      align.push("|");
    }
    a++; b++;
  }

  var Carr = [];
  for (var c = 0; c < B.entry.chains.length; c++) Carr = Carr.concat(B.entry.chains[c].atoms);

  var data = molmil.superpose(Aarr, Barr, Carr, undefined, 2);
  if (data === undefined) return console.error("An error occurred...");

  var oASIdxs = align.map(function (x, i) { return i; }).filter(function (x) { return align[x] == "|"; }).filter(function (x, i) { return data.aligned_indices.includes(i); })
  data.optimized_alignment = align.map(function (x, i) { return oASIdxs.includes(i) ? "|" : " " }).join("");
  data.alignment = align.join("");
  data.seq1 = Aseq;
  data.seq2 = Bseq;
  data.chain1 = A;
  data.chain2 = B;

  ID = A.CID + ":" + B.CID;

  molmil.alignInfo[ID] = data;

  if (!options.skipOrient) molmil.orient(Aarr, A.entry.soup);
  A.entry.soup.renderer.rebuildRequired = true;
  molmil.geometry.reInitChains = true;
}

molmil.record = function (canvas, video_path, video_framerate) {
  // make sure that both the width & height are divisible by 2 (ffmpeg issue)
  var w = canvas.width, h = canvas.height;
  if (w % 2 == 1) w--;
  if (h % 2 == 1) h--;
  if (w != canvas.width || h != canvas.height) { canvas.width = w; canvas.height = h; canvas.renderer.resizeViewPort(); }
  initVideo(video_path, canvas.width, canvas.height, video_framerate);

  canvas.renderer.onRenderFinish = function () {
    var pixels = new Uint8Array(canvas.width * canvas.width * 4);
    addFrame(canvas.toDataURL());
    canvas.renderer.gl.readPixels(0, 0, canvas.width, canvas.height, canvas.renderer.gl.RGBA, canvas.renderer.gl.UNSIGNED_BYTE, pixels);
  };
}

molmil.end_record = function (canvas) {
  finalizeVideo();
  canvas.renderer.onRenderFinish = undefined;
}

molmil.getState = function () {
  var canvas = molmil.fetchCanvas(), commands = [];


  var structures = [];

  for (var i = 0; i < canvas.molmilViewer.structures.length; i++) {
    if (!canvas.molmilViewer.structures[i].pdbid) continue;
    structures.push(canvas.molmilViewer.structures[i]);
  }

  for (var i = 0; i < structures.length; i++) {
    if (structures[i].id.indexOf("_") == -1) commands.push("fetch " + structures[i].id);
    else commands.push("fetch-chain " + structures[i].id);

    var cartoon = [], tube = [];
    for (var c = 0; c < structures.chains.length; c++) {
      if (structures.chains[c].displayMode == 2) tube.push(structures.chains[c].name);
      else if (structures.chains[c].displayMode == 3) cartoon.push(structures.chains[c].name);
    }

    if (tube.length == structures.chains.length) commands.push("show tube, model #" + (i + 1));
    else if (cartoon.length == structures.chains.length) commands.push("show cartoon, model #" + (i + 1));
    else {
      commands.push("hide cartoon, model #" + (i + 1));
      if (tube.length) commands.push("show tube, model #" + (i + 1) + " and (" + tube.map(function (x) { return "chain " + x; }).join(" or ") + ")");
      if (cartoon.length) commands.push("show cartoon, model #" + (i + 1) + " and (" + cartoon.map(function (x) { return "chain " + x; }).join(" or ") + ")");
    }

    for (var c = 0; c < structures.chains.length; c++) {
      var sticks = [], sticks_sc, ballsticks = [], ballsticks_sc = [], spheres = [], spheres_sc = [], lines = [], lines_sc = [];
      for (var m = 0, mol, atm; m < structures.chains[c].molecules.length; m++) {
        mol = structures.chains[c].molecules[m];
        if (mol.displayMode == 0) {
          atm = mol.CA || mol.atoms[0];
          if (atm.displayMode == 1) {
            if (mol.showSC) spheres_sc.push(mol);
            else spheres.push(mol);
          }
          else if (atm.displayMode == 2) {
            if (mol.showSC) ballsticks_sc.push(mol);
            else ballsticks.push(mol);
          }
          else if (atm.displayMode == 3) {
            if (mol.showSC) sticks_sc.push(mol);
            else sticks.push(mol);
          }
          else if (atm.displayMode == 4) {
            if (mol.showSC) lines_sc.push(mol);
            else lines.push(mol);
          }
        }
      }

      // now, figure out how to efficiently create a query that lists the shown residues...

    }


  }

  /*
  
  chain.displayMode = 0; => hidden
  chain.displayMode = 1; => all-atom
  chain.displayMode = 2; => tube
  chain.displayMode = 3; => cartoon
  
  mol.displayMode = 0; => hidden
  mol.displayMode = 1; => spacefill
  mol.displayMode = 2; => ballstick
  mol.displayMode = 3; => stick
  mol.displayMode = 4; => wireframe
  
  */

}

if (typeof (requestAnimationFrame) != "undefined") molmil.animate_molmilViewers();

if (!window.molmil_dep) {
  var dep = document.createElement("script")
  dep.src = molmil.settings.src + "molmil_dep.js";
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(dep);
}

molmil.initVR = function (soup, callback) {
  var initFakeVR = function () {
    var dep = document.createElement("script")
    dep.src = molmil.settings.src + "lib/webvr-polyfill.min.js";
    dep.onload = function () {
      var config = {
        // Scales the recommended buffer size reported by WebVR, which can improve
        // performance.
        BUFFER_SCALE: 1.0, // Default: 0.5.
      }
      var polyfill = new WebVRPolyfill(config);
      navigator.getVRDisplays().then(function (displays) {
        if (displays.length) { molmil.vrDisplays = displays; molmil.VRstatus = true; molmil.initVR(soup, callback); }
        else { molmil.VRstatus = false; callback(); }
      });
    };
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(dep);
  }
  if (!molmil.VRstatus) {
    if (navigator.getVRDisplays) {
      navigator.getVRDisplays().then(function (displays) { if (displays.length) { molmil.vrDisplays = displays; molmil.VRstatus = true; molmil.initVR(soup, callback); } else initFakeVR(); }).catch(function () { initFakeVR(); });
    }
    else initFakeVR();
  }
  else {
    if (soup) molmil.startWebVR(soup);
    if (callback) callback();
  }
}

molmil.arrayMin = function (arr) {
  return arr.reduce(function (p, v) {
    return (p < v ? p : v);
  });
}

molmil.arrayMax = function (arr) {
  return arr.reduce(function (p, v) {
    return (p > v ? p : v);
  });
}


}