import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        textAlign: 'center'
    },
    link: { color: 'rgb(37,137,200)' },
    placesInput: {
        flex: 1,
        padding: 10,
        height: 200,
        backgroundColor: '#ecf0f1',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})