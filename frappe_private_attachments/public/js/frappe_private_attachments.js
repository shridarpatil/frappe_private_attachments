frappe.ui.FileUploader = class FileUploader extends frappe.ui.FileUploader {
	make_dialog() {
		this.dialog = new frappe.ui.Dialog({
			title: __('Upload'),
			primary_action_label: __('Upload'),
			primary_action: () => this.upload_files(),
			secondary_action_label: __('Set all private'),
			secondary_action: () => {

				if(this.dialog.get_secondary_btn().html() == 'Set all public'){
					if(cur_frm){
						var me = this
						frappe.db.get_value("Allow public files", cur_frm.doctype, 'name', function(res){
							console.log(res)
							if(res.name){

								me.uploader.toggle_all_private()
							}else{
								frappe.show_alert("Not allowed to upload public files")
								return
							}
						})
					}
				}else{
					this.uploader.toggle_all_private()
				}
			}
		});

		this.wrapper = this.dialog.body;
		this.dialog.show();
		this.dialog.$wrapper.on('hidden.bs.modal', function() {
			$(this).data('bs.modal', null);
			$(this).remove();
		});
	}
}