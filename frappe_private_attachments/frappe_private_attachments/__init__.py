"""File uploader."""
import frappe
from frappe.handler import upload_file as default_uploader
from frappe.utils import cint


@frappe.whitelist(allow_guest=True)
def upload_file():
    """Make alll atachments as private."""
    if not frappe.db.get_value("Allow public files", frappe.form_dict.get('doctype')):
        if not cint(frappe.form_dict.is_private):
            frappe.form_dict.is_private = 1

    res = default_uploader()
    return res
