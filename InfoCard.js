import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { Text, StyleSheet, ScrollView, Linking, Button } from 'react-native'

const InfoCard = (props) => {

    const [renderSpecificVoterInfo, setRenderSpecificVoterInfo] = useState(false)
    const [voterScenario, setVoterScenario] = useState("")

    const conditionalRender = () => {
        switch (props.selected) {
            case "How to Register":
                return registrationInstructions()
            case "Board Locator":
                return boardLocator()
            default:
                return <Text>Make a Selection Above</Text>
        }
    }

    const renderSpecificInfo = () => {
        switch (voterScenario) {
            case "license":
                return licensingInfo()
            case "Board Locator":
                return boardLocator()
            default:
                return <Text>Make a Selection Above</Text>
        }
    }

    const registrationInstructions = () => {
        // we probably want a scroll view for this list, since it can contain mayb different things...links, pics, etc.
        return (
            <ScrollView>
                <Text>First, find out if you have registered before at
                    <Text style={{ color: 'rgb(32, 137, 220)' }}
                        onPress={() => Linking.openURL('https://voterlookup.ohiosos.gov/voterlookup.aspx')}>
                        {" "}Ohio's Voter Lookup.
                    </Text>
                    {" "}If you have, you are set to vote. You will need to locate your correct polling location using the
                    <Text style={{ color: 'rgb(32, 137, 220)' }}
                        onPress={() => Linking.openURL('https://www.sos.state.oh.us/elections/voters/toolkit/polling-location/')}>
                        {" "}Ohio Polling Location Tool.
                    </Text>
                </Text>
                <Text>{" "}</Text>
                <Card.Divider />
                <Text>If not, you will need to register. You may begin your registration online at
                    <Text style={{ color: 'rgb(32, 137, 220)' }}
                        onPress={() => Linking.openURL('https://olvr.ohiosos.gov/')}>
                        {" "}Ohio's Registration Portal.
                    </Text>
                    {" "}Note that the online portal requires an <Text style={{ fontWeight: 'bold' }}>Ohio ID (be that an ID card or a non-expired Driver's License), your full name, date of birth, residential address, and Social Security Number.</Text>
                </Text>
                <Text>{" "}</Text>
                <Card.Divider />
                <Text style={{ textAlign: 'center' }}>
                    For resources on specific voter scenarios, please select applicable link below:
                </Text>
                <Text style={{ textAlign: 'center' }}>
                    <ScrollView>
                        <Text>{" "}</Text>
                        <Button
                            title="No Ohio ID/License"
                            onPress={() => {
                                setRenderSpecificVoterInfo(true)
                                setVoterScenario("license")
                            }} />
                        <Text>{" "}</Text>
                        <Button title="Military/Veteran" />
                        <Text>{" "}</Text>
                        <Button title="Unsheltered Citizens" />
                    </ScrollView>
                </Text>
            </ScrollView>
        )
    }

    const boardLocator = () => {
        return (
            <Text>board locator</Text>
        )
    }

    const licensingInfo = () => {
        return (
            <>
                <Text>Licensing Info</Text>
                <Text>{" "}</Text>
                <Button title='Go Back' onPress={()=>setRenderSpecificVoterInfo(false)}/>
            </>
        )
    }

    return (
        <Card containerStyle={styles.container}>
            {
                renderSpecificVoterInfo ?
                    renderSpecificInfo()
                    :
                    conditionalRender()
            }
        </Card>
    )
}


export default InfoCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});