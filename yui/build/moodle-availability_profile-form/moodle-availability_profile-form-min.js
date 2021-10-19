YUI.add("moodle-availability_wb_profile-form",function(n,e){M.availability_wb_profile=M.availability_wb_profile||{},M.availability_wb_profile.form=n.Object(M.core_availability.plugin),M.availability_wb_profile.form.profiles=null,M.availability_wb_profile.form.initInner=function(e,i){this.standardFields=e,this.customFields=i},M.availability_wb_profile.form.getNode=function(e){for(var i,l,a,t,o='<span class="availability-group"><label><span class="p-r-1">'+M.util.get_string("conditiontitle","availability_wb_profile")+'</span> <select name="field" class="custom-select"><option value="choose">'+M.util.get_string("choosedots","moodle")+"</option>",s=0;s<this.standardFields.length;s++)o+='<option value="sf_'+(i=this.standardFields[s]).field+'">'+i.display+"</option>";for(s=0;s<this.customFields.length;s++)o+='<option value="cf_'+(i=this.customFields[s]).field+'">'+i.display+"</option>";for(o+='</select></label> <label><span class="accesshide">'+M.util.get_string("label_operator","availability_wb_profile")+' </span><select name="op" title="'+M.util.get_string("label_operator","availability_wb_profile")+'" class="custom-select">',l=["isequalto","contains","doesnotcontain","startswith","endswith","isempty","isnotempty","isinlist"],s=0;s<l.length;s++)o+='<option value="'+l[s]+'">'+M.util.get_string("op_"+l[s],"availability_wb_profile")+"</option>";return o+='</select></label> <label><span class="accesshide">'+M.util.get_string("label_value","availability_wb_profile")+'</span><input name="value" type="text" class="form-control" style="width: 10em" title="'+M.util.get_string("label_value","availability_wb_profile")+'"/></label></span>',a=n.Node.create('<span class="form-inline">'+o+"</span>"),e.sf!==undefined&&a.one("select[name=field] > option[value=sf_"+e.sf+"]")?a.one("select[name=field]").set("value","sf_"+e.sf):e.cf!==undefined&&a.one("select[name=field] > option[value=cf_"+e.cf+"]")&&a.one("select[name=field]").set("value","cf_"+e.cf),e.op!==undefined&&a.one("select[name=op] > option[value="+e.op+"]")&&(a.one("select[name=op]").set("value",e.op),"isempty"!==e.op&&"isnotempty"!==e.op||a.one("input[name=value]").set("disabled",!0)),e.v!==undefined&&a.one("input").set("value",e.v),M.availability_wb_profile.form.addedEvents||(M.availability_wb_profile.form.addedEvents=!0,t=function(e){var i=e.ancestor("span.availability_wb_profile"),e=i.one("select[name=op]"),e="isempty"===e.get("value")||"isnotempty"===e.get("value");i.one("input[name=value]").set("disabled",e),M.core_availability.form.update()},(e=n.one(".availability-field")).delegate("change",function(){t(this)},".availability_wb_profile select"),e.delegate("change",function(){t(this)},".availability_wb_profile input[name=value]")),a},M.availability_wb_profile.form.fillValue=function(e,i){var l=i.one("select[name=field]").get("value");"sf_"===l.substr(0,3)?e.sf=l.substr(3):"cf_"===l.substr(0,3)&&(e.cf=l.substr(3)),e.op=i.one("select[name=op]").get("value"),(i=i.one("input[name=value]")).get("disabled")||(e.v=i.get("value"))},M.availability_wb_profile.form.fillErrors=function(e,i){var l={};this.fillValue(l,i),l.sf===undefined&&l.cf===undefined&&e.push("availability_wb_profile:error_selectfield"),l.v!==undefined&&/^\s*$/.test(l.v)&&e.push("availability_wb_profile:error_setvalue")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});