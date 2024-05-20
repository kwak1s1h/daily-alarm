export function num2DayString(value: number): string
{
    return dayDictionary[value];
}

const dayDictionary: { [keyof: number]: string} = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
}