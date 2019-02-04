/**
 * External dependencies
 */
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';

import styles from './styles.scss';

import { __ } from '@wordpress/i18n';
import { Dashicon } from '@wordpress/components';

function MediaPlaceholder( props ) {
	return (
		<TouchableWithoutFeedback onPress={ props.onMediaOptionsPressed }>
			<View style={ styles.emptyStateContainer }>
				<Dashicon icon={ 'cover-image' }/>
				<Text style={ styles.emptyStateTitle }>
					{ __( 'Image' ) }
				</Text>
				<Text style={ styles.emptyStateDescription }>
					{ __( 'UPLOAD IMAGE' ) }
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default MediaPlaceholder;
