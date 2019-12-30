
        function initMap() {
            var map = new TMap.Map("container", {
                pitch: 45,
                zoom: 12,
                center: new TMap.LatLng(23.02882, 113.14278)
            });
        }
        function loadScript() {
            //创建script标签，并设置src属性添加到body中
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://map.qq.com/api/gljs?v=1.exp&key=5JEBZ-2I5E5-DFBIF-QF3XS-RQQP6-P5BB2&callback=initMap";
            document.body.appendChild(script);
        }
        window.onload = loadScript;
var main = document.getElementById('container');
main.style.width = "100vw";
main.style.height = "100vh";

