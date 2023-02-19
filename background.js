$.get(chrome.extension.getURL('injected.js'),
	function (data) {
		var script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.innerHTML = data;
		document.getElementsByTagName("head")[0].appendChild(script);
		document.getElementsByTagName("body")[0].setAttribute("onLoad", "injected_main();");
	}
);

chrome.runtime.onInstalled.addListener(function (details) {
	if (details.reason == "install") {
		chrome.storage.sync.set({ blockList: ['бузова', 'милохин', 'бузову', 'милохина', 'бузовой', 'милохину', 'тамаев', 'тамаеву', 'боня', 'боню', 'боне', 'блиновская', 'блиновскую', 'блиновской', 'гусейн гасанов', 'гасанов', 'гасанову', 'джарахов', 'джарахову', 'хасбик', 'игорь швед', 'shved', 'ивлеева', 'ивлееву', 'ивлеевой', 'даша карейка', 'карейка', 'серовски', 'надин серовски', 'катя чи', 'диденко', 'серовски', 'некоглай', 'некоглаю', 'некоглаем', 'лерчик', 'гивы', 'гив', 'марафон желаний', 'маслов', 'субо', 'инстасамку', 'инстасамкой', 'виктория романец', 'литвин', 'эдвард бил', 'мелстрой', 'амиран сардаров', 'инстасамка', 'инстасамку', 'instasamka', 'митрошина', 'дашкиев', 'осипов', 'бм', 'бизнес молодость', 'Like центр', 'Аяз', 'Шабутдинов', 'лайк центр', 'Like Центр'] }, function () { });
		$.ajax({
			url: "https://apps.smit.studio/morgenBlock/user",
			method: "post",
			dataType: "json",
			success: (function (res) {
				chrome.storage.sync.set({ token: res.token, refcode: res.ref_code }, function () { });
			})
		})

	} else if (details.reason == "update") { }
});