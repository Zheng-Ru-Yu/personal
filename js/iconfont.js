;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-circled-angle-leftwards" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M88.538 505.84c0 220.832 179.023 399.848 399.855 399.848 220.825 0 399.842-179.015 399.842-399.848 0-220.831-179.015-399.847-399.842-399.848-220.832-0.001-399.855 179.016-399.855 399.847zM838.259 505.84c0 193.231-156.646 349.866-349.866 349.866-193.223 0-349.867-156.636-349.867-349.866 0-193.223 156.645-349.865 349.867-349.865 193.221-0.001 349.866 156.643 349.867 349.865zM375.048 483.887c-5.999 5.985-10.921 14.192-9.559 21.952-1.362 7.761 3.56 15.968 9.559 21.966l191.348 191.348c9.762 9.748 25.581 9.747 35.341 0 9.762-9.762 9.762-25.587 0-35.35l-177.963-177.964 177.963-177.957c9.762-9.761 9.762-25.586 0-35.348-9.76-9.755-25.579-9.755-35.341 0l-191.348 191.352z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-arrow" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.996587 982.536533c-259.871573 0-470.536533-210.66496-470.536533-470.536533s210.66496-470.536533 470.536533-470.536533S982.539947 252.128427 982.539947 512 771.86816 982.536533 511.996587 982.536533zM511.996587 100.281173c-227.38688 0-411.71968 184.3328-411.71968 411.71968s184.3328 411.71968 411.71968 411.71968 411.713707-184.3328 411.713707-411.71968S739.38432 100.281173 511.996587 100.281173zM473.9712 740.745387c-11.480747 11.48672-30.102187 11.48672-41.583787 0-11.48672-11.480747-11.48672-30.102187 0-41.58976L619.53792 512 432.38912 324.844373c-11.48672-11.480747-11.48672-30.102187 0-41.58976 11.480747-11.480747 30.102187-11.480747 41.583787 0l207.95392 207.947947c11.480747 11.48672 11.480747 30.10816 0 41.595733L473.9712 740.745387z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
