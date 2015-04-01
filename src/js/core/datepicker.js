/*
 * --------------------------------------------
 * 下拉列表UI
 * @version  1.0
 * @author   zhaoyusen(hzzhaoyusen@corp.netease.com)
 * --------------------------------------------
 * @class Selectex
 * @extend Component
 * @param {Object} options
 *     options.value             
 *              
 */

var Selectex = require('./selectex.js');
var template = require('./datepicker.html');
var _ = require('./util.js');
var Calendar = require('./calendar.js');

var Datepicker = Selectex.extend({
    name: 'datepicker',
    template: template,
    config: function() {
        _.extend(this.data, {
            // @override source: [],
            // @override selected: null,
            // @override placeholder: '请选择',
            // @override open: false,
            // @override disabled: false,
            // @override multiple: false
        });
        this.supr();
    }
    // select: function(item) {
    //     this.data.selected = item;
    //     this.toggle(false);
    // }
});

module.exports = Datepicker;