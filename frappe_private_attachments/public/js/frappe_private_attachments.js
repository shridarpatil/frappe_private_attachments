frappe.ui.FileUploader = class FileUploader extends frappe.ui.FileUploader {
	make_dialog() {
		this.dialog = new frappe.ui.Dialog({
			title: __('Upload'),
			primary_action_label: __('Upload'),
			primary_action: () => this.upload_files()
		});

		this.wrapper = this.dialog.body;
		this.dialog.show();
		this.dialog.$wrapper.on('hidden.bs.modal', function() {
			$(this).data('bs.modal', null);
			$(this).remove();
		});
	}
}