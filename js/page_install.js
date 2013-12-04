
 /*
 *    phpMumbleAdmin (PMA), web php administration tool for murmur ( mumble server daemon ).
 *    Copyright (C) 2010 - 2013  Dadon David. PMA@ipnoz.net
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

window.onload = function() {

	if ( document.getElementById( 'login' ) ) {
		focus_end( document.getElementById( 'login' ) );
	}
}

function validate_install( doc ) {

	if ( ! form_is_modified( doc ) ) {
		return false;
	}

	if ( doc.login.value === '' ) {
		doc.login.focus();
		return false;
	}

	if ( doc.pw.value === '' ) {
		doc.pw.focus();
		return false;
	}

	if ( doc.confirm_pw.value === '' ) {
		doc.confirm_pw.focus();
		return false;
	}

	if ( doc.pw.value !== doc.confirm_pw.value ) {
		doc.pw.value = '';
		doc.confirm_pw.value = '';
		pma_alert( TEXT.pw_check_failed, doc.pw );
		return false;
	}
}
