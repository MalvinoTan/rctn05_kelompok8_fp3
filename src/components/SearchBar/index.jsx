import { useState } from "react";
import {
  Pressable,
  TextInput,
  View,
  Alert,
  Text
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotelByDate, fetchHotelByKeyword } from "../../api";
import { FontAwesome5 } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  setCheckInDate,
  setCheckOutDate,
  setSearchCheckInValue,
  setSearchCheckOutValue,
  setSearchValue
} from "../../redux/hotelSlice";
import { windowWidth } from "../../utils";
import Gap from "../Gap";
import styles from "./styles";

export default function SearchBar() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.hotel.searchTextValue);
  const checkIn = useSelector((state) => state.hotel.searchCheckInValue);
  const checkOut = useSelector((state) => state.hotel.searchCheckOutValue);
  const checkInDate = useSelector((state) => state.hotel.checkInDate);
  const checkOutDate = useSelector((state) => state.hotel.checkOutDate);

  const [isDatePickerVisibleCheckIn, setDatePickerVisibilityCheckIn] = useState(false);
  const [isDatePickerVisibleCheckOut, setDatePickerVisibilityCheckOut] = useState(false);

  const showAlert = () => Alert.alert("Field cannot empty!");

  const handleRedirectToSearchResult = (type) => {
    if (type === "date") {
      if (checkInDate && checkOutDate) {
        dispatch(fetchHotelByDate({ checkIn, checkOut }));
        return navigation.navigate("Search");
      } else {
        return showAlert();
      }
    } else {
      if (searchValue !== "") {
        dispatch(fetchHotelByKeyword(searchValue));
        return navigation.navigate("Search");
      } else {
        return showAlert();
      }
    }
  };

  const handleConfirmCheckIn = (date) => {
    dispatch(setCheckInDate(date));
    dispatch(setSearchCheckInValue(`${date?.getFullYear()}-${date?.getMonth() < 9
      ?
      '0' + (date?.getMonth() + 1)
      :
      date?.getMonth() + 1}-${date?.getDate() < 9
        ?
        '0' + (date?.getDate())
        :
        date?.getDate()}`));
    setDatePickerVisibilityCheckIn(false);
  };

  const handleConfirmCheckOut = (date) => {
    dispatch(setCheckOutDate(date));
    dispatch(setSearchCheckOutValue(`${date?.getFullYear()}-${date?.getMonth() < 9
      ?
      '0' + (date?.getMonth() + 1)
      :
      date?.getMonth() + 1}-${date?.getDate() < 9
        ?
        '0' + (date?.getDate())
        :
        date?.getDate()}`));
    setDatePickerVisibilityCheckOut(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search hotel name..."
        onChangeText={(text) => dispatch(setSearchValue(text))}
        value={searchValue}
      />
      <Gap height={10} />
      <Pressable
        style={({ pressed }) => styles.btn_search(pressed)}
        onPress={() => handleRedirectToSearchResult("name")}
      >
        <Gap width={10} />
        <Text style={styles.text_btn_login}>Search with name</Text>
      </Pressable>
      <View style={styles.date_container}>
        <Pressable
          style={styles.wrapper_input_date}
          onPress={() => setDatePickerVisibilityCheckIn(true)}
        >
          <FontAwesome5
            name="calendar-alt"
            size={windowWidth * 0.05}
          />
          <Gap width={10} />
          <Text style={styles.input_date}>
            {
              checkIn ? checkIn : "Check In Date"
            }
          </Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isDatePickerVisibleCheckIn}
          mode="date"
          onConfirm={handleConfirmCheckIn}
          onCancel={() => setDatePickerVisibilityCheckIn(false)}
        />
        <Pressable
          style={styles.wrapper_input_date}
          onPress={() => setDatePickerVisibilityCheckOut(true)}
        >
          <FontAwesome5
            name="calendar-alt"
            size={windowWidth * 0.05}
          />
          <Gap width={10} />
          <Text style={styles.input_date}>
            {
              checkOut ? checkOut : "Check Out Date"
            }
          </Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isDatePickerVisibleCheckOut}
          mode="date"
          onConfirm={handleConfirmCheckOut}
          onCancel={() => setDatePickerVisibilityCheckOut(false)}
        />
      </View>
      <Pressable
        style={({ pressed }) => styles.btn_search(pressed)}
        onPress={() => handleRedirectToSearchResult("date")}
      >
        <Gap width={10} />
        <Text>Search with date</Text>
      </Pressable>
    </View>
  );
}
