(function (global, factory) {


    factory(global);

}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

    console.log("Loading...");

    var guid = 0;
    var gui = function Gui() {
        this.guid = guid++;
    };


    gui.prototype.displayTime = function (id) {
        if (typeof id !== "string") {
            throw TypeError("非法类型:");
        }

        var $tager = $(id);
        $tager.text(new Date().toLocaleDateString());
        setTimeout(this.displayTime, 1000);

    };


    function onLoad(f) {
        if (onLoad.load) {
            setTimeout(f, 0);
        } else if (window.addEventListener) {
            window.addEventListener('load', f, false);
        } else if (window.attachEvent) {
            window.attachEvent('onload', f);
        }
    }

    onLoad.load = false;

    onLoad(function () {
        onLoad.load = true;
    });
    /**
     * 解析URL中的参数
     * */
    gui.urlArgs = function () {
        var args = {};                             // Start with an empty object定义一个空对象
        var query = location.search.substring(1);  // Get query string, minus '?'.查找到查询串,并去掉'?'location.search返回问号之后的URL,通常是魔宗查询字符串
        var pairs = query.split("&");              // Split at ampersands根据"&"符号将查询字符串分隔开
        for (var i = 0; i < pairs.length; i++) {    // For each fragment对于每个片段
            var pos = pairs[i].indexOf('=');       // Look for "name=value"查找name=value
            if (pos == -1) continue;               // If not found, skip it如果没有找到的话就跳过
            var name = pairs[i].substring(0, pos);  // Extract the name提取name
            var value = pairs[i].substring(pos + 1); // Extract the value提取value
            value = decodeURIComponent(value);     // Decode the value对value进行解码
            args[name] = value;                    // Store as a property存储为属性
        }
        return args;                               // Return the parsed arguments返回解析后的参数
    }

}));