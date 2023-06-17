export const formatPrice = (price: number): string => {
	return new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(price);
};

export const formatDateToYM = (date: Date): string => {
	return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
};
