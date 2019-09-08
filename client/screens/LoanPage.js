import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Picker } from 'react-native';
import styles from '../stylesheet';
import GlobalState from '../contexts/GlobalState';
import { Link } from '../navigation';

export default function LoanPage() {
    const [state, setState] = useContext(GlobalState);
    const [token, setToken] = useState('BTC');

    useEffect(() => {
        setState(state => ({ ...state, gradient: ['#fff', '#fff'] }))
    }, []);

    const submitDeposit = async () => {
        const res = await fetch();
    }

    return (
    <View>
        <View style={styles.lnContentContainer}>
            <View style={styles.mainContainer} >
                <View style={styles.header}>
                    <Text style={styles.lnLogo}>SignaLend</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Link to='/'>
                            <Text style={styles.lnNavItem}>Shorting</Text>
                        </Link>
                        <Text style={styles.lnNavItemLogin}>Binance Login</Text>
                    </View>
                </View>
                <Text style={styles.lnH1}>Your HODL, Earning</Text>
                <Text style={styles.lnH2}>Earn 6% APY through decentralized lending of your cryptocurrency assets</Text>
                <Text style={styles.lnDescriptionMark}>Assets provided are offered to traders wishing to trade on a loan. Interest and the amount provided is guarnteed by our algorithm monitering each participating trader's risk. When a user whishes to take back </Text>
            </View>
        </View>
        <View style={styles.lnFormBound}>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <View style={styles.lnShortFormContainer}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <TextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                style={styles.lnInput}
                                placeholder={'Lend Amount'}
                                placeholderTextColor="#999"
                                onChangeText={value => {
                                    setCollateral(value)
                                }}
                                underlineColorAndroid='transparent'
                            />
                            <Picker
                                selectedValue={token}
                                style={{ height: 55, width: 80, margin: 10 }}
                                itemStyle={{ height: 55, color: 'white', fontSize: 32 }}
                                onValueChange={(itemValue, itemIndex) =>
                                    setToken(itemValue)
                                }>
                                <Picker.Item label="BTC" value="BTC" />
                                <Picker.Item label="BNB" value="BNB" />
                            </Picker>
                        </View>
                        <Text style={styles.priceDisplay}>
                            $180 USD
                            </Text>
                        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 55 }}>
                            <TouchableOpacity>
                                <Text style={styles.shortSubmitButton}>
                                    Lend
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
        </View>
    </View>
    );
}