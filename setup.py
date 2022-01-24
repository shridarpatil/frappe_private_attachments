from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in frappe_private_attachments/__init__.py
from frappe_private_attachments import __version__ as version

setup(
	name='frappe_private_attachments',
	version=version,
	description='Make all attachments as private',
	author='Shridhar',
	author_email='shridharpatil2792@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
