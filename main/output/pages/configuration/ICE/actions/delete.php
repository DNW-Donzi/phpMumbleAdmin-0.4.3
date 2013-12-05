<?php

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

if ( ! defined( 'PMA_STARTED' ) ) { die( 'ILLEGAL: You cannot call this script directly !' ); }

$actionBox = new PMA_output_actionBox();

$actionBox->set_conf( 'css', 'alert small' );

$actionBox->form();
$actionBox->input( 'hidden', 'cmd', 'config_ICE' );
$actionBox->input( 'hidden', 'delete_profile', '' );
$actionBox->confirm( $profile['name'], $TEXT['confirm_del_ICE_profile'] );
$actionBox->submit( 'confirm' );
$actionBox->close();

echo $actionBox->output;

?>