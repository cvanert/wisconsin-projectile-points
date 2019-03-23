var pointLibrary = (function() {

	var artifacts = {
		clovis: {
			tang: ['lanceolate'],
			base: ['subconcave', 'concave'],
			blade: ['ovate'],
			notch: ['none'],
			basalGrinding: true,
			workmanship: ['Skillful'],
			name: 'Clovis',
			timeCulture: ['Early Paleo-Indian'],
			length:[6.9, 14.0],
			width: [2.0, 4.0],
			relativeThickness: [0.7, 1.1],
			pages: [14, 15]
		},

		folsom: {
			tang: ['lanceolate'],
			base: ['concave'],
			blade: ['ovate'],
			notch: ['fluted'],
			basalGrinding: true,
			workmanship: ['Excellent'],
			name: 'Folsom',
			timeCulture: ['Paleo-Indian'],
			length:[2.5, 13.0],
			width: [1.5, 3.0],
			relativeThickness: [0.3, 0.7],
			pages: [16, 17]
		},

		scottsbluff: {
			tang: ['expanding_stem', 'straight_stem'],
			base: ['straight', 'subconcave'],
			blade: ['parallel_ovate'],
			notch: ['none'],
			basalGrinding: true,
			workmanship: ['Excellent'],
			name: 'Scottsbluff',
			timeCulture: ['Late Paleo-Indian', 'Early Archaic'],
			length:[5.0, 15.0],
			width: [2.2, 3.9],
			relativeThickness: [0.6, 1.3],
			pages: [18, 19]
		},

		agateBasin: {
			tang: ['lanceolate'],
			base: ['straight'],
			blade: ['ovate', 'parallel_ovate'],
			notch: ['none'],
			basalGrinding: true,
			workmanship: ['Good'],
			name: 'Agate Basin',
			timeCulture: ['Late Paleo-Indian'],
			length:[7.0, 14.7],
			width: [1.8, 3.9],
			relativeThickness: [0.5, 0.9],
			pages: [20, 21]
		},

		hardinBarbed: {
			tang: ['expanding_stem'],
			base: ['subconcave', 'straight', 'subconvex'],
			blade: ['triangular', 'ovate'],
			notch: ['barbed'],
			basalGrinding: true,
			workmanship: ['Unusually fine'],
			name: 'Hardin Barbed',
			timeCulture: ['Late Paleo-Indian', 'Early Archaic'],
			length:[4.7, 13.5],
			width: [2.0, 4.5],
			relativeThickness: [0.6, 1.1],
			pages: [22, 23]
		},

		thebes: {
			tang: ['side_notched'],
			base: ['subconcave', 'straight', 'subconvex'],
			blade: ['triangular', 'contracting_ovate', 'ovate'],
			notch: ['diagonal_notched'],
			basalGrinding: true,
			workmanship: ['Good'],
			name: 'Thebes',
			timeCulture: ['Early Archaic', 'Middle Archaic'],
			length:[5.7, 15.1],
			width: [2.9, 7.1],
			relativeThickness: [0.8, 1.2],
			pages: [24, 25]
		},

		stCharles: {
			tang: ['corner_notched'],
			base: ['convex'],
			blade: ['ovate'],
			notch: ['corner_notched'],
			basalGrinding: true,
			workmanship: ['Excellent'],
			name: 'St. Charles',
			timeCulture: ['Early Archaic', 'Archaic', 'Middle Woodland...ish'],
			length:[6.5, 10.2],
			width: [2.9, 4.0],
			relativeThickness: [0.7, 0.9],
			pages: [26, 27]
		},

		raddatzSideNotched: {
			tang: ['side_notched'],
			base: ['subconcave', 'straight'],
			blade: ['ovate', 'parallel_ovate'],
			notch: ['side_notched'],
			basalGrinding: true,
			workmanship: ['Often reworked'],
			name: 'Raddatz Side-Notched',
			timeCulture: ['Middle Archaic', 'Late Archaic'],
			length:[3.8, 9.2],
			width: [1.6, 3.4],
			relativeThickness: [0.6, 1.1],
			pages: [28, 29]
		},

		osceola: {
			tang: ['side_notched'],
			base: ['straight', 'concave'],
			blade: ['parallel_ovate'],
			notch: ['side_notched'],
			basalGrinding: false,
			workmanship: ['Good', 'Excellent'],
			name: 'Osceola',
			timeCulture: ['Late Archaic', '(Old Copper)'],
			length:[8.0, 23.0],
			width: [2.5, 4.7],
			relativeThickness: [1.0, 1.3],
			pages: [30, 31]
		},

		godar: {
			tang: ['side_notched'],
			base: ['straight'],
			blade: ['parallel_ovate'],
			notch: ['side_notched'],
			basalGrinding: false,
			workmanship: ['Good'],
			name: 'Godar',
			timeCulture: ['Late Archaic', '(Red Ochre; Titterington Focus)'],
			length:[5.0, 10.0],
			width: [3.2, 4.0],
			relativeThickness: [0.9, 1.1],
			pages: [32, 33]
		},

		turkeyTail: {
			tang: ['side_notched'],
			base: ['bivectoral'],
			blade: ['incurvate_excurvate'],
			notch: ['side_notched'],
			basalGrinding: false,
			workmanship: ['Excellent'],
			name: 'Turkey Tail',
			timeCulture: ['Late Archaic', 'Early Woodland'],
			length:[9.2, 27.4],
			width: [3.8, 8.3],
			relativeThickness: [0.4, 0.7],
			pages: [34, 35]
		},

		durstStemmer: {
			tang: ['expanding_stem'],
			base: ['convex', 'subconvex'],
			blade: ['excurvate'],
			notch: ['none'],
			basalGrinding: false,
			workmanship: ['Variable'],
			name: 'Durst Stemmed',
			timeCulture: ['Late Archaic', 'Early Woodland'],
			length:[2.1, 7.0],
			width: [1.3, 2.9],
			relativeThickness: [0.5, 1.0],
			pages: [36, 37]
		},

		kramerLike: {
			tang: ['straight_stem'],
			base: ['straight', 'subconvex'],
			blade: ['ovate', 'triangular'],
			notch: ['none'],
			basalGrinding: true,
			workmanship: ['Good'],
			name: 'Kramer-like',
			timeCulture: ['Late Archaic', 'Early Woodland'],
			length:[4.1, 8.0],
			width: [1.7, 3.4],
			relativeThickness: [0.6, 0.9],
			pages: [38, 39]
		},

		foxValleyStemmed: {
			tang: ['contracting_stem'],
			base: ['straight', 'subconvex'],
			blade: ['triangular'],
			notch: ['none'],
			basalGrinding: false,
			workmanship: ['Crude'],
			name: 'Fox Valley Stemmed',
			timeCulture: ['Archaic', '(May continue into Woodland)'],
			length:[4.0, 6.7],
			width: [2.1, 3.5],
			relativeThickness: [0.8, 1.6],
			pages: [40, 41]
		},

		madisonSideNotched: {
			tang: ['side_notched'],
			base: ['straight', 'subconvex'],
			blade: ['triangular', 'contracting_ovate'],
			notch: ['side_notched', 'oblique_side_notched'],
			basalGrinding: false,
			workmanship: ['Crude'],
			name: 'Madison Side-Notched',
			timeCulture: ['Late Archaic', 'Early Woodland'],
			length:[2.9, 5.0],
			width: [1.7, 3.3],
			relativeThickness: [0.4, 0.9],
			pages: [42, 43]
		},

		waubesaContractingStem: {
			tang: ['contracting_stem'],
			base: ['convex'],
			blade: ['ovate', 'contracting_ovate'],
			notch: ['none'],
			basalGrinding: false,
			workmanship: ['Good'],
			name: 'Waubesa Contracting Stem',
			timeCulture: ['Late Archaic', 'Early Woodland', 'Middle Woodland'],
			length:[5.0, 10.0],
			width: [2.5, 4.0],
			relativeThickness: [0.7, 1.0],
			pages: [44, 45]
		},

		adena: {
			tang: ['contracting_stem'],
			base: ['straight', 'subconvex'],
			blade: ['ovate'],
			notch: ['none'],
			basalGrinding: true,
			workmanship: ['Good'],
			name: 'Adena',
			timeCulture: ['Early Woodland', 'Middle Woodland'],
			length:[7.5, 12.0],
			width: [3.2, 4.5],
			relativeThickness: [0.8, 1.1],
			pages: [46, 47]
		},

		snyders: {
			tang: ['corner_notched'],
			base: ['convex', 'subconvex'],
			blade: ['contracting_ovate'],
			notch: ['corner_notched'],
			basalGrinding: false,
			workmanship: ['Well made'],
			name: 'Snyders',
			timeCulture: ['Middle Woodland', '(Hopewell)'],
			length:[5.0, 18.0],
			width: [3.9, 14.4],
			relativeThickness: [0.5, 1.1],
			pages: [48, 49]
		},

		bifurcateBase: {
			tang: ['side_notched'],
			base: ['concave', 'triangular_concave'],
			blade: ['contracting_ovate', 'triangular'],
			notch: ['side_notched', 'oblique_side_notched', 'corner_notched'],
			basalGrinding: false,
			workmanship: ['Good'],
			name: 'Bifurcate Base',
			timeCulture: ['Late Archaic', 'Late Woodland'],
			length:[2.5, 5.0],
			width: [1.5, 3.0],
			relativeThickness: [0.3, 0.67],
			pages: [50, 51]
		},

		smallSideNotched: {
			tang: ['side_notched'],
			base: ['straight', 'subconcave'],
			blade: ['contracting_ovate', 'triangular'],
			notch: ['side_notched', 'oblique_side_notched'],
			basalGrinding: false,
			workmanship: ['Good'],
			name: 'Small Side-Notched',
			timeCulture: ['Late Archaic', 'Late Woodland'],
			length:[2.5, 4.5],
			width: [1.5, 3.0],
			relativeThickness: [0.4, 0.8],
			pages: [52, 53]
		},

		foxValleyTruncatedBarb: {
			tang: ['corner_notched'],
			base: ['subconvex', 'straight', 'subconcave'],
			blade: ['incurvate'],
			notch: ['corner_notched', 'barbed'],
			basalGrinding: false,
			workmanship: ['Delicate'],
			name: 'Fox Valley Truncated Barb',
			timeCulture: ['Late Woodland'],
			length:[2.2, 3.6],
			width: [2.0, 3.4],
			relativeThickness: [0.3, 0.7],
			pages: [54, 55]
		},

		lateWoodland: {
			tang: ['side_notched', 'corner_notched'],
			base: ['straight', 'subconvex'],
			blade: ['triangular', 'contracting_ovate', 'ovate'],
			notch: ['side_notched', 'oblique_side_notched', 'corner_notched'],
			basalGrinding: false,
			workmanship: ['Fine', 'Good'],
			name: 'Late Woodland (general category)',
			timeCulture: ['Late Woodland'],
			length:[2.0, 4.2],
			width: [0.9, 2.4],
			relativeThickness: [0.3, 0.7],
			pages: [56, 57]
		},

		cahokia: {
			tang: ['side_notched'],
			base: ['subconcave', 'straight', 'subconvex'],
			blade: ['triangular'],
			notch: ['side_notched', 'basal_notched'],
			basalGrinding: false,
			workmanship: ['Excellent'],
			name: 'Cahokia',
			timeCulture: ['Early Mississippian', '(Late Late Woodland)', 'Middle Mississippian', 'Late Mississippian'],
			length:[1.3, 6.4],
			width: [1.0, 3.0],
			relativeThickness: [0.2, 0.5],
			pages: [58, 59]
		},

		madisonTriangular: {
			tang: ['unmodified'],
			base: ['subconcave', 'straight', 'subconvex'],
			blade: ['triangular'],
			notch: ['none'],
			basalGrinding: false,
			workmanship: ['Finely flaked'],
			name: 'Madison Triangular',
			timeCulture: ['Late Woodland', 'Mississippian', 'Proto-historic'],
			length:[1.2, 6.0],
			width: [1.3, 2.7],
			relativeThickness: [0.2, 0.5],
			pages: [60, 61]
		}
	};

	var pointInQuestion = {

	};


	return {

		updatePointInQuestion: function(attribute, selection) {
			pointInQuestion[attribute] = selection;
		},

		determinePoint: function() {
			var artifactTypes, x, measVal;
			measVal = document.querySelector("input:checked").value;
			artifactTypes = Object.keys(artifacts);
			x = [];
			for (var i = 0; i < artifactTypes.length; i++) {
				if (artifacts[artifactTypes[i]]['tang'].includes(pointInQuestion['tang']) &&
					artifacts[artifactTypes[i]]['base'].includes(pointInQuestion['base']) &&
					artifacts[artifactTypes[i]]['blade'].includes(pointInQuestion['blade']) &&
					artifacts[artifactTypes[i]]['notch'].includes(pointInQuestion['notch']) &&
					artifacts[artifactTypes[i]]['basalGrinding'] == pointInQuestion['basalGrinding']) {
					if (measVal === "Yes") {
						if (pointInQuestion['length'] >= artifacts[artifactTypes[i]]['length'][0] && 
						pointInQuestion['length'] <= artifacts[artifactTypes[i]]['length'][1] &&
						pointInQuestion['width'] >= artifacts[artifactTypes[i]]['width'][0] && 
						pointInQuestion['width'] <= artifacts[artifactTypes[i]]['width'][1] &&
						pointInQuestion['relativeThickness'] >= artifacts[artifactTypes[i]]['relativeThickness'][0] && 
						pointInQuestion['relativeThickness'] <= artifacts[artifactTypes[i]]['relativeThickness'][1]) {
							x.push(artifacts[artifactTypes[i]]['name'] + ': ' + artifacts[artifactTypes[i]]['timeCulture'].join(', ') + ' (' + artifacts[artifactTypes[i]]['pages'][0] + ' - ' + artifacts[artifactTypes[i]]['pages'][1] + ')');
						}
					} else {
						x.push(artifacts[artifactTypes[i]]['name'] + ': ' + artifacts[artifactTypes[i]]['timeCulture'].join(', ') + ' (' + artifacts[artifactTypes[i]]['pages'][0] + ' - ' + artifacts[artifactTypes[i]]['pages'][1] + ')');
					}
					
				}
			}
			if (x.length < 1) {
				x = ['Does not match projectile point types typically found in Wisconsin']
			}
			return x;
		},

		clearPointInQuestion: function() {
			pointInQuestion = {};
		}

	}

})();




var pointUI = (function() {

	var index = 0;

	var characteristics = {
		tang: {
			title: 'Tang Shape',
			question: 'Select tang shape that most closely resembles the tang shape of the projectile point',
			folder: ['tang_shape', 'lanceolate', 'straight_stem', 'expanding_stem', 'contracting_stem', 'side_notched', 'corner_notched', 'unmodified'],
			labels: ['', 'Lanceolate', 'Straight Stem', 'Expanding Stem', 'Contracting Stem', 'Side-Notched', 'Corner-Notched', 'Unmodified'],
			options: []
		},
		base: {
			title: 'Base Shape',
			question: 'Select base shape that most closely resembles the base shape of the projectile point',
			folder: ['base_shape', 'straight', 'subconvex', 'convex','subconcave', 'concave', 'triangular_concave', 'bivectoral', 'trivectoral'],
			labels: ['', 'Straight', 'Subconvex', 'Convex', 'Subconcave', 'Concave', 'Triangular-Concave', 'Bivectoral', 'Trivectoral'],
			options: []
		},
		blade: {
			title: 'Blade Shape',
			question: 'Select blade shape that most closely resembles the blade shape of the projectile point',
			folder: ['blade_shape', 'triangular', 'incurvate', 'incurvate_excurvate', 'excurvate', 'ovate', 'parallel_ovate', 'expanding_ovate', 'contracting_ovate'],
			labels: ['', 'Triangular', 'Incurvate', 'Incurvate-Excurvate', 'Excurvate', 'Ovate', 'Parallel-Ovate', 'Expanding-Ovate', 'Contracting-Ovate'],
			options: []
		},
		notch: {
			title: 'Notch Type',
			question: 'Select notch type that most closely resembles the notch type of the projectile point',
			folder: ['notch_type', 'side_notched', 'diagonal_notched', 'basal_notched', 'corner_notched', 'oblique_side_notched', 'barbed', 'fluted', 'none'],
			labels: ['', 'Side-Notched', 'Diagonal-Notched', 'Basal-Notched', 'Corner-Notched', 'Oblique Side-Notched', 'Barbed', 'Fluted', 'None'],
			options: []
		},
		basalGrinding: {
			title: 'Basal Grinding',
			question: 'Does the projectile point exhibit basal grinding?',
			folder: [],
			labels: [],
			options: ['Yes', 'No']
		},
		/*basalAngle: {
			title: 'Basal Angle',
			question: 'Is the base square with basal angles approximately 90 degrees?',
			folder: ['cahokia', 'cahokia'],
			labels: [],
			options: ['Yes', 'No']
		}*/
	};


	var measurements = {
		length: {
			title: 'Length',
			label: 'Length (in cm)',
			question: 'In centimeters, what is the length of the point?',
		},

		width: {
			title: 'Width',
			label: 'Width (in cm)',
			question: 'In centimeters, what is the width of the point?',
		},

		relativeThickness: {
			title: 'Relative Thickness',
			label: 'Relative Thickness (in cm)',
			question: 'In centimeters, what is the relative thickness of the point?',

		}
	};


	function getLabel(attribute, x) {
		var index;
		index = characteristics[attribute]['folder'].indexOf(x);
		return characteristics[attribute]['labels'][index];
	};


	function questionHTML() {
		var element, charArr, attributeObj, attributeObj, folderArr, labelArr, optionsArr, attribute, title, type, folder, label, question, optionsContainer, optionHTML, newOptionHTML, titleHTML, newTitleHTML, questionHTML, newQuestionHTML, buttonHTML, attributeHTML;

		element = document.querySelector('.questions');
		charArr = Object.keys(characteristics);
		attributeObj = characteristics[charArr[index]];
		attributeObjKeys = Object.keys(attributeObj);
		folderArr = attributeObj['folder'];
		labelArr = attributeObj['labels'];
		optionsArr = attributeObj['options'];
		attribute = charArr[index];
		title = attributeObj['title'];
		folder = folderArr[0];
		question = attributeObj['question'];

		titleHTML = '<div class="%attribute%_container"> <form class="point_char" id="point_char"> <fieldset class="fieldset_container"><fieldset class="title_container"> <h2 class="%attribute%_title">%title%</h2>';
		newTitleHTML = titleHTML.replace(/%attribute%/g, attribute).replace('%title%', title);

		questionHTML = '<div class="question_container">%question%</div></fieldset>';
		newQuestionHTML = questionHTML.replace('%question%', question);

		buttonHTML = '</div> <div class="button_container"><button type="button" class="button_continue">Continue</button></div></div></fieldset></form>';

		if (attribute === 'basalGrinding') {
			optionsContainerHTML = ['<div class="yn_options_container"> <div class="container_1"></div> <div class="container_2"><label class="basal_grinding_yes">Yes</label><br><input type="radio" name="yes" class="yes" value="Yes"></div> <div class="container_3"><label class="basal_grinding_no">No</label><br><input type="radio" name="no" class="no" value="No"></div> <div class="container_4"></div>'];
		} else {
			optionsContainerHTML = ['<div class="options_container">'];
			for (var i = 1; i < folderArr.length; i++) {
				type = folderArr[i];
				label = labelArr[i];
				optionHTML = '<div class="%type%_container"> <label class="%type%_label"><div class="%type%_fig"> <img src="%folder%/%type%.jpg"> </div> <div class="%type%_title">%label%</div></label><input type="radio" name="%attribute%"" class="%attribute%" value="%type%"></div>';
				// Replace placeholder
				newOptionHTML = optionHTML.replace(/%type%/g, type).replace(/%attribute%/g, attribute).replace('%folder%', folder).replace('%label%', label);
				optionsContainerHTML.push(newOptionHTML);
			}
		}
		
		attributeHTML = newTitleHTML + newQuestionHTML + optionsContainerHTML.join(' ') + buttonHTML;
		document.querySelector('.questions').insertAdjacentHTML('beforeend', attributeHTML);

		return attribute;
	};



	function measurementQuestionHTML() {
		var element, measArr, measObj, title, qTitle, question, titleHTML, buttonHTML, measFieldsets, measHTML, newMeasHTML, attributeHTML;

		element = document.querySelector('.questions');
		measArr = Object.keys(measurements);

		titleHTML = '<div class="measurement_container"> <form class="point_char" id="point_char"> <fieldset class="fieldset_container"><fieldset class="title_container"> <h2 class="measurement"_title">Measurements</h2></fieldset><div class="include_meas"><h3 class="include_q">Include measurements?</h3><div class="include_options"><div class="include_container"><input type="checkbox" id="include" name="include"><label for="include" value="Yes">Yes</label></div><div class="do_not_include_container"><input type="checkbox" id="do_not_include" name="do_not_include" value="No"><label for="do_not_include">No</label></div></div></div>';

		buttonHTML = '</div> <div class="button_container"><button type="button" class="button_submit">Submit</button></div></div></fieldset></form>';

		measFieldsets = ['<div class="measurementsCont">'];

		for (var i = 0; i < measArr.length; i++) {
			measObj = measurements[measArr[i]];
			title = measObj['title'];
			label = measObj['label'];
			question = measObj['question'];

			measHTML = '<fieldset class="meas_field"> <h3 class="qTitle">%qTitle%</h3><div class="meas_question">%question%</div><label class="measLabel" for="%label%">%label%:</label><input type="text" class="measQ" id="%type%" value="%label%"></fieldset>';
			newMeasHTML = measHTML.replace('%qTitle%', title);
			newMeasHTML = newMeasHTML.replace('%question%', question);
			newMeasHTML = newMeasHTML.replace(/%label%/g, label);
			newMeasHTML = newMeasHTML.replace('%type%', measArr[i]);

			measFieldsets.push(newMeasHTML);
		}
			
		attributeHTML = titleHTML + measFieldsets.join(' ') + buttonHTML;
		document.querySelector('.questions').insertAdjacentHTML('beforeend', attributeHTML);
	};



	function nextChar(attribute) {
		var el;
		index++
		el = document.querySelector('.' + attribute + '_container');
		el.parentElement.removeChild(el);
		return questionHTML();
	};



	function displayPoint(arr) {
		var element, html, newHTML, htmlArr, determined;

		element = document.querySelector('.identified');
		htmlArr = [];

		for (var i = 0; i < arr.length; i++) {
			html = '<p class="determined"_title">%Point%</p>';
			newHTML = html.replace('%Point%', arr[i]);
			htmlArr.push(newHTML);
		}

		determined = '<div class="determined_point">' + htmlArr.join(' ') + '</div>';
		element.insertAdjacentHTML('afterbegin', determined);

	};


	function measurementHTML(attribute) {
		var el, update;
		el = document.querySelector('.' + attribute + '_container');
		el.parentElement.removeChild(el);
		return measurementQuestionHTML();
	};


	function clearSelections() {
		var arr;
		arr = ['tang', 'base', 'blade', 'notch', 'basalGrinding', 'length', 'width', 'relativeThickness'];
		for (var i = 0; i < arr.length; i++) {
			document.querySelector('.selected_' + arr[i]).innerHTML = '';
		}
	}


	return {

		displayHTML: function() {
			var x = questionHTML();
			return x;
		},

		updateHTML: function(attribute) {
			var x;
			if (attribute === 'basalGrinding') {
				x = measurementHTML(attribute);
				return x;
			};
			x = nextChar(attribute);
			return x;
		},

		label: function(attribute, x) {
			return getLabel(attribute, x);
		},

		determinedHTML: function(arr) {
			displayPoint(arr);
		},

		resetIndex: function() {
			index = 0;
			clearSelections();
		}

	};

})();



var pointController = (function(pLibrary, pUI) {

	var setupEventListeners = function(attribute) {
		var btn, reset;
		if (attribute !== 'tang' && attribute !== 'base' && attribute !== 'blade' && attribute !== 'notch' && attribute !== 'basalGrinding') {
			btn = document.querySelector('.button_submit');
			btn.addEventListener('click', getMeasurement);
		} else {
			btn = document.querySelector('.button_continue');
			btn.addEventListener('click', function(){getSelection(attribute)});
		}
		reset = document.querySelector('.button_reset');
		reset.addEventListener('click', newPoint)
	};

	function getSelection(attribute) {
		var x, label, att;
		x = document.querySelector("input:checked").value;
		if (attribute !== 'basalGrinding') {
			label = pUI.label(attribute, x);
		} else {
			label = x;
		}
		document.querySelector('.selected_' + attribute).insertAdjacentHTML('afterbegin', label);
		if (x === 'No') {
			x = false;
		} else if (x === 'Yes') {
			x = true;
		}
		pLibrary.updatePointInQuestion(attribute,x);
		att = pUI.updateHTML(attribute);
		setupEventListeners(att);
	};


	function getMeasurement() {
		var meas, vals, type, x, y, point;
		meas = ['length', 'width', 'relativeThickness'];
		vals = [];
		
		for (var i = 0; i < meas.length; i++) {
			type = meas[i];
			x = Number(document.getElementById(type).value);
			vals.push(x);
			y = x.toFixed(2) + ' cm'
			document.querySelector('.selected_' + type).insertAdjacentHTML('afterbegin', y);
			pLibrary.updatePointInQuestion(type,x);
		}
		point = pLibrary.determinePoint();
		pUI.determinedHTML(point);
	};


	function newPoint() {
		var el, attribute;
		el = document.querySelector('.measurement_container');
		el.parentElement.removeChild(el);
		pUI.resetIndex();
		pLibrary.clearPointInQuestion();
		attribute = pUI.displayHTML();
		setupEventListeners(attribute);
	}


	return {
		init: function() {
			var attribute;
			console.log('Point Identifier has started');
			attribute = pUI.displayHTML();
			setupEventListeners(attribute);
		}
	}

})(pointLibrary, pointUI);


pointController.init();