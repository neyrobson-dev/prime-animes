import styled from 'styled-components/native';

export const Container = styled.View`
	position: absolute;
	width: 100%;
	align-items: center;
	bottom: 8px;
`

export const Banner = styled.Image`
	height: 100px;
`

export const Tags = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
`

export const MenuTag = styled.Text`
	color: #fff;
	padding: 0 8px;
	font-size: 13px;
`

export const Separator = styled.View`
	width: 3px;
	height: 3px;
	background-color: #e8e8e8;
	border-radius: 3px;
`

export const MenuHero = styled.View`
	width: 90%;
	margin-top: 15px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

export const Button = styled.TouchableOpacity`
	align-items: center;
`

export const TextButton = styled.Text`
	color: #fff;
	font-size: 11px;
	margin-top: 3px;
`

export const Play = styled.TouchableOpacity`
	flex-direction: row;
	background-color: #fff;
	width: 130px;
	height: 40px;
	border-radius: 2px;
	align-items: center;
	justify-content: center;
`

export const TextButtonPlay = styled.Text`
	font-size: 15px;
	font-weight: bold;
	padding-left: 5px;
`