'use strict';

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

  var indexTpl = __webpack_require__(1);

  $('#wrapper').html(indexTpl);

  /***/
},
/* 1 */
/***/function (module, exports) {

  module.exports = "<section class=\"header\">    <div class=\"download\">        <div class=\"header-left\">            <div class=\"download_logo\">                <img src=\"https://s1.ljcdn.com/hulk-web/static/m/images/common/logo300x300.png?_v=20180529174602311\" alt=\"使用链家APP\">            </div>            <div class=\"download_mid\">                <div class=\"download_title\">使用链家APP</div>                <div class=\"download_sub\">即享个性化房源推荐</div>            </div>        </div>        <div class=\"download_btn\">            <span>立即打开</span>        </div>    </div>    <!-- 头部2 -->    <div class=\"download_top\"></div>    <!-- 头部3 -->    <header class=\"home_header\">        <div class=\"home_header_top\">            <div class=\".home_header_content\">                <a href=\"\" class=\"font_picture1\">                    <span>                        <em class=\"city\">北京</em>                        <i>&#xe651;</i>                    </span>                </a>            </div>            <a href=\"\" class=\"font_picture2\">&#xe623;</a>        </div>        <div class=\"home_header_content\">            <div class=\"slogn\" title=\"链上你未来的家 真房源如你所见\"></div>            <a href=\"\">                <div class=\"search_box\">                    <i>&#xe651;</i>                    <input type=\"text\" placeholder=\"输入小区或商圈开始找房咯~\">                </div>            </a>        </div>    </header></section><!-- 主体 --><div class=\"main_content\">    <!-- 频道导航 -->    <div class=\"main_nav\">        <h2 class=\"box_col box_col1\">            <a href=\"\">                <div class=\"ershoufang\"></div>                <div>二手房</div>            </a>        </h2>        <h2 class=\"box_col box_col2\">            <a href=\"\">                <div class=\"xinfang\"></div>                <div>新房</div>            </a>        </h2>        <h2 class=\"box_col box_col3\">            <a href=\"\">                <div class=\"zufang\"></div>                <div>租房</div>            </a>        </h2>        <h2 class=\"box_col box_col4\">            <a href=\"\">                <div class=\"maifang\"></div>                <div>卖房</div>            </a>        </h2>        <h2 class=\"box_col box_col5\">            <a href=\"\">                <div class=\"lvju\"></div>                <div>旅居</div>            </a>        </h2>        <h2 class=\"box_col box_col6\">            <a href=\"\">                <div class=\"haiwai\"></div>                <div>海外</div>            </a>        </h2>        <h2 class=\"box_col box_col7\">            <a href=\"\">                <div class=\"chachengjiao\"></div>                <div>查成交</div>            </a>        </h2>        <h2 class=\"box_col box_col8\">            <a href=\"\">                <div class=\"zhaoxiaoqu\"></div>                <div>找小区</div>            </a>        </h2>    </div>    <!-- 常用工具 -->    <div class=\"main_bool\">        <dl class=\"main_bool_box\">            <dt class=\"title\">                <a href=\"\">常用工具</a>            </dt>            <dd class=\"tool_list\">                <a href=\"\" class=\"chafangjia \">                    <span></span>                    <div>查房价</div>                </a>                <a href=\"\" class=\"qugujia\">                    <span></span>                    <div>去估价</div>                </a>                <a href=\"\" class=\"zhaojingjiren\">                    <span></span>                    <div>找经纪人</div>                </a>                <a href=\"\" class=\"huanjingquyu\">                    <span></span>                    <div>环京区域</div>                </a>                <a href=\"\" class=\"wenda\">                    <span></span>                    <div>问答</div>                </a>                <a href=\"\" class=\"baike\">                    <span></span>                    <div>百科</div>                </a>                <a href=\"\" class=\"kefudianhua\">                    <span></span>                    <div>客服电话</div>                </a>                <a href=\"\" class=\"goufangzizhi\">                    <span></span>                    <div>购房资质</div>                </a>                <a href=\"\" class=\"zuidishoufu\">                    <span></span>                    <div>最低首付</div>                </a>            </dd>        </dl>    </div>    <!--  房源列表-->    <div class=\"main_houselist\">        <h3 class=\"\"></h3>    </div></div><!-- 尾部 --><footer class=\"footer\">    <div class=\"footer_nav\"></div>    <div class=\"footer_list\"></div>    <div class=\"footer_end\"></div></footer>";

  /***/
}]
/******/);