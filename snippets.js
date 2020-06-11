module.exports = [
  {
    name: 'hypercore_footer_widget_count',
    description: 'Change the number of footer widgets. Default is 3',
    body: ["add_filter('hypercore_footer_widget_count', function (\\$count) {", '\treturn $0;', '});'],
  },
];
