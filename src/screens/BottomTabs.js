import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { MovieStack } from "./StackTabs";
import FavoriteMovieScreen from "./FavoriteMovieScreen";
import  ProfileScreen  from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
import * as Icon from 'react-native-feather';

const Tab = createBottomTabNavigator()

export const BottomTab = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({route})=>({
                    tabBarIcon:()=>{
                        if(route.name == "電影"){
                            return <Icon.Film width={25} height={25} />
                        }else if(route.name == "搜尋"){
                            return <Icon.Search width={25} height={25} />
                        }
                        else if(route.name == "我的最愛"){
                            return <Icon.Star width={25} height={25} />
                        }else if (route.name == "個人"){
                            return <Icon.User width={25} height={25} />
                        }
                    },
                    headerBackTitle:'返回',
                    headerShown:false,   
                })}
            >
                <Tab.Screen name="電影" component={MovieStack}/>
                <Tab.Screen name="搜尋" component={SearchScreen}/>
                <Tab.Screen name="我的最愛" component={FavoriteMovieScreen}/>
                <Tab.Screen name="個人" component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}   

                        //     return <Icon.Star width={25} height={25} />
                        // }else if (route.name == "搜尋"){
                        //     return <Icon.Search width={25} height={25} />
                        // }else if(route.name == "個人"){
                        //     return <Icon.Profile width={25} height={25} />
                       
                // <Tab.Screen name="電影" component={MovieStack}/>
                // {/* <Tab.Screen name="搜尋" component={Search}/> */}
                // <Tab.Screen name="我的最愛" component={FavoriteMovieScreen}/>
                // {/* <Tab.Screen name="個人" component={ProfileScreen}/> */}
    