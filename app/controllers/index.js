import Controller from '@ember/controller';
import { action } from '@ember/object';

export default Controller.extend({
  showMouseTarget: true,

  toggleShow: action(function() {
    this.set('showMouseTarget', !this.showMouseTarget);
  })
});
