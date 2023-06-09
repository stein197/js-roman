import "mocha";
import * as assert from "assert";
import * as roman from ".";

const CASES: [string, number][] = [
	["I", 1],
	["II", 2],
	["III", 3],
	["IV", 4],
	["V", 5],
	["VI", 6],
	["VII", 7],
	["VIII", 8],
	["IX", 9],
	["X", 10],
	["XI", 11],
	["XII", 12],
	["XIII", 13],
	["XIV", 14],
	["XV", 15],
	["XVI", 16],
	["XVII", 17],
	["XVIII", 18],
	["XIX", 19],
	["XX", 20],
	["XXI", 21],
	["XXII", 22],
	["XXIII", 23],
	["XXIV", 24],
	["XXV", 25],
	["XXVI", 26],
	["XXVII", 27],
	["XXVIII", 28],
	["XXIX", 29],
	["XXX", 30],
	["XXXI", 31],
	["XXXII", 32],
	["XXXIII", 33],
	["XXXIV", 34],
	["XXXV", 35],
	["XXXVI", 36],
	["XXXVII", 37],
	["XXXVIII", 38],
	["XXXIX", 39],
	["XL", 40],
	["XLI", 41],
	["XLII", 42],
	["XLIII", 43],
	["XLIV", 44],
	["XLV", 45],
	["XLVI", 46],
	["XLVII", 47],
	["XLVIII", 48],
	["XLIX", 49],
	["L", 50],
	["LI", 51],
	["LII", 52],
	["LIII", 53],
	["LIV", 54],
	["LV", 55],
	["LVI", 56],
	["LVII", 57],
	["LVIII", 58],
	["LIX", 59],
	["LX", 60],
	["LXI", 61],
	["LXII", 62],
	["LXIII", 63],
	["LXIV", 64],
	["LXV", 65],
	["LXVI", 66],
	["LXVII", 67],
	["LXVIII", 68],
	["LXIX", 69],
	["LXX", 70],
	["LXXI", 71],
	["LXXII", 72],
	["LXXIII", 73],
	["LXXIV", 74],
	["LXXV", 75],
	["LXXVI", 76],
	["LXXVII", 77],
	["LXXVIII", 78],
	["LXXIX", 79],
	["LXXX", 80],
	["LXXXI", 81],
	["LXXXII", 82],
	["LXXXIII", 83],
	["LXXXIV", 84],
	["LXXXV", 85],
	["LXXXVI", 86],
	["LXXXVII", 87],
	["LXXXVIII", 88],
	["LXXXIX", 89],
	["XC", 90],
	["XCI", 91],
	["XCII", 92],
	["XCIII", 93],
	["XCIV", 94],
	["XCV", 95],
	["XCVI", 96],
	["XCVII", 97],
	["XCVIII", 98],
	["XCIX", 99],
	["C", 100],
	["CI", 101],
	["CII", 102],
	["CIII", 103],
	["CIV", 104],
	["CV", 105],
	["CVI", 106],
	["CVII", 107],
	["CVIII", 108],
	["CIX", 109],
	["CX", 110],
	["CXI", 111],
	["CXII", 112],
	["CXIII", 113],
	["CXIV", 114],
	["CXV", 115],
	["CXVI", 116],
	["CXVII", 117],
	["CXVIII", 118],
	["CXIX", 119],
	["CXX", 120],
	["CXXI", 121],
	["CXXII", 122],
	["CXXIII", 123],
	["CXXIV", 124],
	["CXXV", 125],
	["CXXVI", 126],
	["CXXVII", 127],
	["CXXVIII", 128],
	["CXXIX", 129],
	["CXXX", 130],
	["CXXXI", 131],
	["CXXXII", 132],
	["CXXXIII", 133],
	["CXXXIV", 134],
	["CXXXV", 135],
	["CXXXVI", 136],
	["CXXXVII", 137],
	["CXXXVIII", 138],
	["CXXXIX", 139],
	["CXL", 140],
	["CXLI", 141],
	["CXLII", 142],
	["CXLIII", 143],
	["CXLIV", 144],
	["CXLV", 145],
	["CXLVI", 146],
	["CXLVII", 147],
	["CXLVIII", 148],
	["CXLIX", 149],
	["CL", 150],
	["CLI", 151],
	["CLII", 152],
	["CLIII", 153],
	["CLIV", 154],
	["CLV", 155],
	["CLVI", 156],
	["CLVII", 157],
	["CLVIII", 158],
	["CLIX", 159],
	["CLX", 160],
	["CLXI", 161],
	["CLXII", 162],
	["CLXIII", 163],
	["CLXIV", 164],
	["CLXV", 165],
	["CLXVI", 166],
	["CLXVII", 167],
	["CLXVIII", 168],
	["CLXIX", 169],
	["CLXX", 170],
	["CLXXI", 171],
	["CLXXII", 172],
	["CLXXIII", 173],
	["CLXXIV", 174],
	["CLXXV", 175],
	["CLXXVI", 176],
	["CLXXVII", 177],
	["CLXXVIII", 178],
	["CLXXIX", 179],
	["CLXXX", 180],
	["CLXXXI", 181],
	["CLXXXII", 182],
	["CLXXXIII", 183],
	["CLXXXIV", 184],
	["CLXXXV", 185],
	["CLXXXVI", 186],
	["CLXXXVII", 187],
	["CLXXXVIII", 188],
	["CLXXXIX", 189],
	["CXC", 190],
	["CXCI", 191],
	["CXCII", 192],
	["CXCIII", 193],
	["CXCIV", 194],
	["CXCV", 195],
	["CXCVI", 196],
	["CXCVII", 197],
	["CXCVIII", 198],
	["CXCIX", 199],
	["CC", 200],
	["CCX", 210],
	["CCXX", 220],
	["CCXXX", 230],
	["CCXL", 240],
	["CCL", 250],
	["CCLX", 260],
	["CCLXX", 270],
	["CCLXXX", 280],
	["CCXC", 290],
	["CCC", 300],
	["CCCX", 310],
	["CCCXX", 320],
	["CCCXXX", 330],
	["CCCXL", 340],
	["CCCL", 350],
	["CCCLX", 360],
	["CCCLXX", 370],
	["CCCLXXX", 380],
	["CCCXC", 390],
	["CD", 400],
	["CDX", 410],
	["CDXX", 420],
	["CDXXX", 430],
	["CDXL", 440],
	["CDL", 450],
	["CDLX", 460],
	["CDLXX", 470],
	["CDLXXX", 480],
	["CDXC", 490],
	["D", 500],
	["DC", 600],
	["DCC", 700],
	["DCCC", 800],
	["CM", 900],
	["M", 1000],
	["MC", 1100],
	["MCC", 1200],
	["MCCC", 1300],
	["MCD", 1400],
	["MD", 1500],
	["MDC", 1600],
	["MDCC", 1700],
	["MDCCC", 1800],
	["MCM", 1900],
	["MCMI", 1901],
	["MCMII", 1902],
	["MCMIII", 1903],
	["MCMIV", 1904],
	["MCMV", 1905],
	["MCMVI", 1906],
	["MCMVII", 1907],
	["MCMVIII", 1908],
	["MCMIX", 1909],
	["MCMX", 1910],
	["MCMXI", 1911],
	["MCMXII", 1912],
	["MCMXIII", 1913],
	["MCMXIV", 1914],
	["MCMXV", 1915],
	["MCMXVI", 1916],
	["MCMXVII", 1917],
	["MCMXVIII", 1918],
	["MCMXIX", 1919],
	["MCMXX", 1920],
	["MCMXXI", 1921],
	["MCMXXII", 1922],
	["MCMXXIII", 1923],
	["MCMXXIV", 1924],
	["MCMXXV", 1925],
	["MCMXXVI", 1926],
	["MCMXXVII", 1927],
	["MCMXXVIII", 1928],
	["MCMXXIX", 1929],
	["MCMXXX", 1930],
	["MCMXXXI", 1931],
	["MCMXXXII", 1932],
	["MCMXXXIII", 1933],
	["MCMXXXIV", 1934],
	["MCMXXXV", 1935],
	["MCMXXXVI", 1936],
	["MCMXXXVII", 1937],
	["MCMXXXVIII", 1938],
	["MCMXXXIX", 1939],
	["MCMXL", 1940],
	["MCMXLI", 1941],
	["MCMXLII", 1942],
	["MCMXLIII", 1943],
	["MCMXLIV", 1944],
	["MCMXLV", 1945],
	["MCMXLVI", 1946],
	["MCMXLVII", 1947],
	["MCMXLVIII", 1948],
	["MCMXLIX", 1949],
	["MCML", 1950],
	["MCMLI", 1951],
	["MCMLII", 1952],
	["MCMLIII", 1953],
	["MCMLIV", 1954],
	["MCMLV", 1955],
	["MCMLVI", 1956],
	["MCMLVII", 1957],
	["MCMLVIII", 1958],
	["MCMLIX", 1959],
	["MCMLX", 1960],
	["MCMLXI", 1961],
	["MCMLXII", 1962],
	["MCMLXIII", 1963],
	["MCMLXIV", 1964],
	["MCMLXV", 1965],
	["MCMLXVI", 1966],
	["MCMLXVII", 1967],
	["MCMLXVIII", 1968],
	["MCMLXIX", 1969],
	["MCMLXX", 1970],
	["MCMLXXI", 1971],
	["MCMLXXII", 1972],
	["MCMLXXIII", 1973],
	["MCMLXXIV", 1974],
	["MCMLXXV", 1975],
	["MCMLXXVI", 1976],
	["MCMLXXVII", 1977],
	["MCMLXXVIII", 1978],
	["MCMLXXIX", 1979],
	["MCMLXXX", 1980],
	["MCMLXXXI", 1981],
	["MCMLXXXII", 1982],
	["MCMLXXXIII", 1983],
	["MCMLXXXIV", 1984],
	["MCMLXXXV", 1985],
	["MCMLXXXVI", 1986],
	["MCMLXXXVII", 1987],
	["MCMLXXXVIII", 1988],
	["MCMLXXXIX", 1989],
	["MCMXC", 1990],
	["MCMXCI", 1991],
	["MCMXCII", 1992],
	["MCMXCIII", 1993],
	["MCMXCIV", 1994],
	["MCMXCV", 1995],
	["MCMXCVI", 1996],
	["MCMXCVII", 1997],
	["MCMXCVIII", 1998],
	["MCMXCIX", 1999],
	["MM", 2000],
	["MMI", 2001],
	["MMII", 2002],
	["MMIII", 2003],
	["MMIV", 2004],
	["MMV", 2005],
	["MMVI", 2006],
	["MMVII", 2007],
	["MMVIII", 2008],
	["MMIX", 2009],
	["MMX", 2010],
	["MMXI", 2011],
	["MMXII", 2012],
	["MMXIII", 2013],
	["MMXIV", 2014],
	["MMXV", 2015],
	["MMXVI", 2016],
	["MMXVII", 2017],
	["MMXVIII", 2018],
	["MMXIX", 2019],
	["MMXX", 2020],
	["MMXXI", 2021],
	["MMXXII", 2022],
	["MMXXIII", 2023],
	["MMXXIV", 2024],
	["MMXXV", 2025],
	["MMXXVI", 2026],
	["MMXXVII", 2027],
	["MMXXVIII", 2028],
	["MMXXIX", 2029],
	["MMXXX", 2030],
	["MMXXXI", 2031],
	["MMXXXII", 2032],
	["MMXXXIII", 2033],
	["MMXXXIV", 2034],
	["MMXXXV", 2035],
	["MMXXXVI", 2036],
	["MMXXXVII", 2037],
	["MMXXXVIII", 2038],
	["MMXXXIX", 2039],
	["MMXL", 2040],
	["MMXLI", 2041],
	["MMXLII", 2042],
	["MMXLIII", 2043],
	["MMXLIV", 2044],
	["MMXLV", 2045],
	["MMXLVI", 2046],
	["MMXLVII", 2047],
	["MMXLVIII", 2048],
	["MMXLIX", 2049],
	["MML", 2050],
	["MMC", 2100],
	["MMCC", 2200],
	["MMCCC", 2300],
	["MMCD", 2400],
	["MMD", 2500],
	["MMDC", 2600],
	["MMDCC", 2700],
	["MMDCCC", 2800],
	["MMCM", 2900],
	["MMM", 3000],
	["MMMCMXCIX", 3999]	
];

describe("roman.parse()", () => {
	it("Should return correct result", () => {
		for (const [romanNum, arabicNum] of CASES)
			assert.equal(roman.parse(romanNum), arabicNum);
	});
	it("Should return correct result when strings are lowercased", () => {
		for (const [romanNum, arabicNum] of CASES)
			assert.equal(roman.parse(romanNum.toLowerCase()), arabicNum);
	});
	it("Should throw an error when string is empty", () => {
		assert.throws(() => roman.parse(""), {message: "Cannot parse \"\": the string is empty"});
	});
	it("Should throw an error when string contains invalid characters", () => {
		assert.throws(() => roman.parse("VIa"), {message: "Cannot parse \"VIa\" at 2: the character \"a\" is not valid roman digit"});
	});
	it("Should throw an error when string contains more than 3 same digits in a row", () => {
		assert.throws(() => roman.parse("viiii"), {message: "Cannot parse \"viiii\" at 4: the character \"i\" occurs more than 3 times in a row"});
	});
	it("Should throw an error when consequent digits combinations are bigger than previous ones", () => {
		assert.throws(() => roman.parse("xxxixx"));
		assert.throws(() => roman.parse("dddixd"));
	});
	// TODO: Add error messages
	it("Should throw an error when there are invalid token sequences equal to the previous ones", () => {
		assert.throws(() => roman.parse("IVI"));
		assert.throws(() => roman.parse("XIVI"));
		assert.throws(() => roman.parse("VIVI"));
		assert.throws(() => roman.parse("IVII"));
		assert.throws(() => roman.parse("XLXX"));
		assert.throws(() => roman.parse("XLXIXI"));
		assert.throws(() => roman.parse("XCLL"));
		assert.throws(() => roman.parse("CDC"));
		assert.throws(() => roman.parse("XIVIV"));
		assert.throws(() => roman.parse("XLXLXLXL"));
		assert.throws(() => roman.parse("XCXCXC"));
		assert.throws(() => roman.parse("CDCDCD"));
		assert.throws(() => roman.parse("MXCXCXCXCXCXCXCXCXCXCXCXCXCXCVIVIVIVI"));
	});
	it("Should throw an error when there are invalid subtraction (large gap between subtracted and subtractor)", () => {
		assert.throws(() => roman.parse("il"), {message: "Cannot parse \"il\" at 1: higher digit in token \"il\" is too high"});
		assert.throws(() => roman.parse("ic"), {message: "Cannot parse \"ic\" at 1: higher digit in token \"ic\" is too high"});
		assert.throws(() => roman.parse("id"), {message: "Cannot parse \"id\" at 1: higher digit in token \"id\" is too high"});
		assert.throws(() => roman.parse("im"), {message: "Cannot parse \"im\" at 1: higher digit in token \"im\" is too high"});
		assert.throws(() => roman.parse("xd"), {message: "Cannot parse \"xd\" at 1: higher digit in token \"xd\" is too high"});
		assert.throws(() => roman.parse("xm"), {message: "Cannot parse \"xm\" at 1: higher digit in token \"xm\" is too high"});
	});
	it("Should throw an error when there are invalid subtraction (subtraction of digits that are multiple of five)", () => {
		assert.throws(() => roman.parse("vx"), {message: "Cannot parse \"vx\" at 1: lower digit in token \"vx\" cannot be a multiple of five"});
		assert.throws(() => roman.parse("vl"), {message: "Cannot parse \"vl\" at 1: lower digit in token \"vl\" cannot be a multiple of five"});
		assert.throws(() => roman.parse("vc"), {message: "Cannot parse \"vc\" at 1: lower digit in token \"vc\" cannot be a multiple of five"});
		assert.throws(() => roman.parse("vd"), {message: "Cannot parse \"vd\" at 1: lower digit in token \"vd\" cannot be a multiple of five"});
		assert.throws(() => roman.parse("vm"), {message: "Cannot parse \"vm\" at 1: lower digit in token \"vm\" cannot be a multiple of five"});
		assert.throws(() => roman.parse("lc"), {message: "Cannot parse \"lc\" at 1: lower digit in token \"lc\" cannot be a multiple of five"});
		assert.throws(() => roman.parse("ld"), {message: "Cannot parse \"ld\" at 1: lower digit in token \"ld\" cannot be a multiple of five"});
		assert.throws(() => roman.parse("lm"), {message: "Cannot parse \"lm\" at 1: lower digit in token \"lm\" cannot be a multiple of five"});
		assert.throws(() => roman.parse("dm"), {message: "Cannot parse \"dm\" at 1: lower digit in token \"dm\" cannot be a multiple of five"});
	});
});
describe("roman.stringify()", () => {
	it("Should return correct result", () => {
		for (const [romanNum, arabicNum] of CASES)
			assert.equal(roman.stringify(arabicNum), romanNum);
	});
	it("Should return correct result when number is the lower bound", () => {
		assert.equal(roman.stringify(1), "I");
	});
	it("Should return correct result when number is the upper bound", () => {
		assert.equal(roman.stringify(3999), "MMMCMXCIX");
	});
	it("Should throw an error when the argument is less than 1", () => {
		assert.throws(() => roman.stringify(0), {message: "Cannot convert 0 to a roman number: only integers within range of [1..3999] are allowed"});
	});
	it("Should throw an error when the argument is greater than 3999", () => {
		assert.throws(() => roman.stringify(4000), {message: "Cannot convert 4000 to a roman number: only integers within range of [1..3999] are allowed"});
	});
	it("Should throw an error when the argument is not an integer", () => {
		assert.throws(() => roman.stringify(1.5), {message: "Cannot convert 1.5 to a roman number: only integers are allowed"});
	});
});
describe("roman.valid()", () => {
	it("Should return false when the string is empty", () => {
		assert.equal(roman.valid(""), false);
	});
	it("Should return false when the string contains invalid characters", () => {
		assert.equal(roman.valid("a"), false);
	});
	it("Should return false when the string contains more than 3 occurences of the same digit in a row", () => {
		assert.equal(roman.valid("iiii"), false);
	});
	it("Should return false when the string contains bigger subsequent digits than previous ones", () => {
		assert.equal(roman.valid("XXXIXX"), false);
	});
	it("Should return true when the string is correct", () => {
		for (const [romanNum] of CASES)
			assert.equal(roman.valid(romanNum), true);
	});
});