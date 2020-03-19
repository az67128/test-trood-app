import { defineMessages } from 'react-intl'


export const CURRENCIES = {
  AED: { code: 'AED', number: '784', name: 'UAE Dirham', symbol: 'Dh' },
  AFN: { code: 'AFN', number: '971', name: 'Afghani', symbol: 'Af' },
  ALL: { code: 'ALL', number: '008', name: 'Lek', symbol: 'L' },
  AMD: { code: 'AMD', number: '051', name: 'Armenian Dram', symbol: '\u058F' },
  ANG: { code: 'ANG', number: '532', name: 'Netherlands Antillean Guilder', symbol: '\u0192' },
  AOA: { code: 'AOA', number: '973', name: 'Kwanza', symbol: 'Kz' },
  ARS: { code: 'ARS', number: '032', name: 'Argentine Peso', symbol: '$' },
  AUD: { code: 'AUD', number: '036', name: 'Australian Dollar', symbol: '$' },
  AWG: { code: 'AWG', number: '533', name: 'Aruban Guilder', symbol: '\u0192' },
  AZN: { code: 'AZN', number: '944', name: 'Azerbaijanian Manat', symbol: '\u20BC' },
  BAM: { code: 'BAM', number: '977', name: 'Convertible Mark', symbol: 'KM' },
  BBD: { code: 'BBD', number: '052', name: 'Barbados Dollar', symbol: '$' },
  BDT: { code: 'BDT', number: '050', name: 'Taka', symbol: '\u09F3' },
  BGN: { code: 'BGN', number: '975', name: 'Bulgarian Lev', symbol: 'лв' },
  BHD: { code: 'BHD', number: '048', name: 'Bahraini Dinar', symbol: 'BD' },
  BIF: { code: 'BIF', number: '108', name: 'Burundi Franc', symbol: '\u20A3' },
  BMD: { code: 'BMD', number: '060', name: 'Bermudian Dollar', symbol: '$' },
  BND: { code: 'BND', number: '096', name: 'Brunei Dollar', symbol: '$' },
  BOB: { code: 'BOB', number: '068', name: 'Boliviano', symbol: '$' },
  BRL: { code: 'BRL', number: '986', name: 'Brazilian Real', symbol: '$' },
  BSD: { code: 'BSD', number: '044', name: 'Bahamian Dollar', symbol: '$' },
  BTN: { code: 'BTN', number: '064', name: 'Ngultrum', symbol: 'Nu' },
  BWP: { code: 'BWP', number: '072', name: 'Pula', symbol: 'P' },
  BYN: { code: 'BYN', number: '933', name: 'Belarussian Ruble', symbol: 'Br' },
  BZD: { code: 'BZD', number: '084', name: 'Belize Dollar', symbol: '$' },
  CAD: { code: 'CAD', number: '124', name: 'Canadian Dollar', symbol: '$' },
  CDF: { code: 'CDF', number: '976', name: 'Congolese Franc', symbol: '\u20A3' },
  CHF: { code: 'CHF', number: '756', name: 'Swiss Franc', symbol: '\u20A3' },
  CLP: { code: 'CLP', number: '152', name: 'Chilean Peso', symbol: '$' },
  CNY: { code: 'CNY', number: '156', name: 'Yuan Renminbi', symbol: '\u00A5' },
  COP: { code: 'COP', number: '170', name: 'Colombian Peso', symbol: '$' },
  CRC: { code: 'CRC', number: '188', name: 'Costa Rican Colon', symbol: '\u20A1' },
  CUP: { code: 'CUP', number: '192', name: 'Cuban Peso', symbol: '$' },
  CVE: { code: 'CVE', number: '132', name: 'Cape Verde Escudo', symbol: '$' },
  CZK: { code: 'CZK', number: '203', name: 'Czech Koruna', symbol: 'K\u010D' },
  DJF: { code: 'DJF', number: '262', name: 'Djibouti Franc', symbol: '\u20A3' },
  DKK: { code: 'DKK', number: '208', name: 'Danish Krone', symbol: 'kr' },
  DOP: { code: 'DOP', number: '214', name: 'Dominican Peso', symbol: '$' },
  DZD: { code: 'DZD', number: '012', name: 'Algerian Dinar', symbol: 'DA' },
  EGP: { code: 'EGP', number: '818', name: 'Egyptian Pound', symbol: 'LE' },
  ERN: { code: 'ERN', number: '232', name: 'Nakfa', symbol: 'Nfk' },
  ETB: { code: 'ETB', number: '230', name: 'Ethiopian Birr', symbol: 'Br' },
  EUR: { code: 'EUR', number: '978', name: 'Euro', symbol: '\u20AC' },
  FJD: { code: 'FJD', number: '242', name: 'Fiji Dollar', symbol: '$' },
  FKP: { code: 'FKP', number: '238', name: 'Falkland Islands Pound', symbol: '\u00A3' },
  GBP: { code: 'GBP', number: '826', name: 'Pound Sterling', symbol: '\u00A3' },
  GEL: { code: 'GEL', number: '981', name: 'Lari', symbol: '\u20BE' },
  GHS: { code: 'GHS', number: '936', name: 'Ghana Cedi', symbol: '\u20B5' },
  GIP: { code: 'GIP', number: '292', name: 'Gibraltar Pound', symbol: '\u00A3' },
  GMD: { code: 'GMD', number: '270', name: 'Dalasi', symbol: 'D' },
  GNF: { code: 'GNF', number: '324', name: 'Guinea Franc', symbol: '\u20A3' },
  GTQ: { code: 'GTQ', number: '320', name: 'Quetzal', symbol: 'Q' },
  GYD: { code: 'GYD', number: '328', name: 'Guyana Dollar', symbol: '$' },
  HKD: { code: 'HKD', number: '344', name: 'Hong Kong Dollar', symbol: '$' },
  HNL: { code: 'HNL', number: '340', name: 'Lempira', symbol: 'L' },
  HRK: { code: 'HRK', number: '191', name: 'Kuna', symbol: 'Kn' },
  HTG: { code: 'HTG', number: '332', name: 'Gourde', symbol: 'G' },
  HUF: { code: 'HUF', number: '348', name: 'Forint', symbol: 'Ft' },
  IDR: { code: 'IDR', number: '360', name: 'Rupiah', symbol: 'Rp' },
  ILS: { code: 'ILS', number: '376', name: 'New Israeli Sheqel', symbol: '\u20AA' },
  INR: { code: 'INR', number: '356', name: 'Indian Rupee', symbol: '\u20B9' },
  IQD: { code: 'IQD', number: '368', name: 'Iraqi Dinar', symbol: 'ID' },
  IRR: { code: 'IRR', number: '364', name: 'Iranian Rial', symbol: 'IR' },
  ISK: { code: 'ISK', number: '352', name: 'Iceland Krona', symbol: 'kr' },
  JMD: { code: 'JMD', number: '388', name: 'Jamaican Dollar', symbol: '$' },
  JOD: { code: 'JOD', number: '400', name: 'Jordanian Dinar', symbol: 'JD' },
  JPY: { code: 'JPY', number: '392', name: 'Yen', symbol: '\u00A5' },
  KES: { code: 'KES', number: '404', name: 'Kenyan Shilling', symbol: 'KSh' },
  KGS: { code: 'KGS', number: '417', name: 'Som', symbol: 'с' },
  KHR: { code: 'KHR', number: '116', name: 'Riel', symbol: '\u17DB' },
  KMF: { code: 'KMF', number: '174', name: 'Comoro Franc', symbol: '\u20A3' },
  KPW: { code: 'KPW', number: '408', name: 'North Korean Won', symbol: '\uC6D0' },
  KRW: { code: 'KRW', number: '410', name: 'South Korean Won', symbol: '\u20A9' },
  KWD: { code: 'KWD', number: '414', name: 'Kuwaiti Dinar', symbol: 'KD' },
  KYD: { code: 'KYD', number: '136', name: 'Cayman Islands Dollar', symbol: '$' },
  KZT: { code: 'KZT', number: '398', name: 'Tenge', symbol: '\u20B8' },
  LAK: { code: 'LAK', number: '418', name: 'Kip', symbol: '\u20AD' },
  LBP: { code: 'LBP', number: '422', name: 'Lebanese Pound', symbol: '.\u0644.\u0644' },
  LKR: { code: 'LKR', number: '144', name: 'Sri Lanka Rupee', symbol: '\u20b9' },
  LRD: { code: 'LRD', number: '430', name: 'Liberian Dollar', symbol: '$' },
  LSL: { code: 'LSL', number: '426', name: 'Loti', symbol: 'L' },
  LYD: { code: 'LYD', number: '434', name: 'Libyan Dinar', symbol: 'LD' },
  MAD: { code: 'MAD', number: '504', name: 'Moroccan Dirham', symbol: 'Dh' },
  MDL: { code: 'MDL', number: '498', name: 'Moldovan Leu', symbol: 'L' },
  MGA: { code: 'MGA', number: '969', name: 'Malagasy Ariary', symbol: 'Ar.' },
  MKD: { code: 'MKD', number: '807', name: 'Denar', symbol: 'ден.' },
  MMK: { code: 'MMK', number: '104', name: 'Kyat', symbol: 'K' },
  MNT: { code: 'MNT', number: '496', name: 'Tugrik', symbol: '\u20AE' },
  MOP: { code: 'MOP', number: '446', name: 'Pataca', symbol: '$' },
  MRU: { code: 'MRU', number: '929', name: 'Ouguiya', symbol: 'UM' },
  MUR: { code: 'MUR', number: '480', name: 'Mauritius Rupee', symbol: '\u20b9' },
  MVR: { code: 'MVR', number: '462', name: 'Rufiyaa', symbol: 'Rf' },
  MWK: { code: 'MWK', number: '454', name: 'Kwacha', symbol: 'K' },
  MXN: { code: 'MXN', number: '484', name: 'Mexican Peso', symbol: '$' },
  MYR: { code: 'MYR', number: '458', name: 'Malaysian Ringgit', symbol: 'RM' },
  MZN: { code: 'MZN', number: '943', name: 'Mozambique Metical', symbol: 'MT' },
  NAD: { code: 'NAD', number: '516', name: 'Namibia Dollar', symbol: 'N$' },
  NGN: { code: 'NGN', number: '566', name: 'Naira', symbol: '\u20A6' },
  NIO: { code: 'NIO', number: '558', name: 'Cordoba Oro', symbol: '$' },
  NOK: { code: 'NOK', number: '578', name: 'Norwegian Krone', symbol: 'kr' },
  NPR: { code: 'NPR', number: '524', name: 'Nepalese Rupee', symbol: '\u20b9' },
  NZD: { code: 'NZD', number: '554', name: 'New Zealand Dollar', symbol: '$' },
  OMR: { code: 'OMR', number: '512', name: 'Rial Omani', symbol: 'RO' },
  PAB: { code: 'PAB', number: '590', name: 'Balboa', symbol: 'B/.' },
  PEN: { code: 'PEN', number: '604', name: 'Nuevo Sol', symbol: 'S/' },
  PGK: { code: 'PGK', number: '598', name: 'Kina', symbol: 'K' },
  PHP: { code: 'PHP', number: '608', name: 'Philippine Peso', symbol: '\u20B1' },
  PKR: { code: 'PKR', number: '586', name: 'Pakistan Rupee', symbol: '\u20b9' },
  PLN: { code: 'PLN', number: '985', name: 'Zloty', symbol: 'z\u0142' },
  PYG: { code: 'PYG', number: '600', name: 'Guarani', symbol: '\u20B2' },
  QAR: { code: 'QAR', number: '634', name: 'Qatari Rial', symbol: 'QR' },
  RON: { code: 'RON', number: '946', name: 'Romanian Leu', symbol: 'L' },
  RSD: { code: 'RSD', number: '941', name: 'Serbian Dinar', symbol: 'дин.' },
  RUB: { code: 'RUB', number: '643', name: 'Russian Ruble', symbol: '\u20BD' },
  RWF: { code: 'RWF', number: '646', name: 'Rwanda Franc', symbol: '\u20A3' },
  SAR: { code: 'SAR', number: '682', name: 'Saudi Riyal', symbol: 'SR' },
  SBD: { code: 'SBD', number: '090', name: 'Solomon Islands Dollar', symbol: '$' },
  SCR: { code: 'SCR', number: '690', name: 'Seychelles Rupee', symbol: '\u20b9' },
  SDG: { code: 'SDG', number: '938', name: 'Sudanese Pound', symbol: '\u00A3' },
  SEK: { code: 'SEK', number: '752', name: 'Swedish Krona', symbol: 'kr' },
  SGD: { code: 'SGD', number: '702', name: 'Singapore Dollar', symbol: '$' },
  SHP: { code: 'SHP', number: '654', name: 'Saint Helena Pound', symbol: '\u00A3' },
  SLL: { code: 'SLL', number: '694', name: 'Leone', symbol: 'Le' },
  SOS: { code: 'SOS', number: '706', name: 'Somali Shilling', symbol: 'S' },
  SRD: { code: 'SRD', number: '968', name: 'Surinam Dollar', symbol: '$' },
  SSP: { code: 'SSP', number: '728', name: 'South Sudanese Pound', symbol: 'SSP' },
  STN: { code: 'STN', number: '930', name: 'Dobra', symbol: 'Db' },
  SVC: { code: 'SVC', number: '222', name: 'El Salvador Colon', symbol: '\u20A1' },
  SYP: { code: 'SYP', number: '760', name: 'Syrian Pound', symbol: 'S\u00A3' },
  SZL: { code: 'SZL', number: '748', name: 'Lilangeni', symbol: 'L' },
  THB: { code: 'THB', number: '764', name: 'Baht', symbol: '\u0E3F' },
  TJS: { code: 'TJS', number: '972', name: 'Somoni', symbol: 'с.' },
  TMT: { code: 'TMT', number: '934', name: 'Turkmenistan New Manat', symbol: 'm' },
  TND: { code: 'TND', number: '788', name: 'Tunisian Dinar', symbol: 'TD' },
  TOP: { code: 'TOP', number: '776', name: 'Pa’anga', symbol: '$' },
  TRY: { code: 'TRY', number: '949', name: 'Turkish Lira', symbol: '\u20BA' },
  TTD: { code: 'TTD', number: '780', name: 'Trinidad and Tobago Dollar', symbol: '$' },
  TWD: { code: 'TWD', number: '901', name: 'New Taiwan Dollar', symbol: 'NT$' },
  TZS: { code: 'TZS', number: '834', name: 'Tanzanian Shilling', symbol: 'TSh' },
  UAH: { code: 'UAH', number: '980', name: 'Hryvnia', symbol: '\u20B4' },
  UGX: { code: 'UGX', number: '800', name: 'Uganda Shilling', symbol: 'USh' },
  USD: { code: 'USD', number: '840', name: 'US Dollar', symbol: '$' },
  UYU: { code: 'UYU', number: '858', name: 'Peso Uruguayo', symbol: '$' },
  UZS: { code: 'UZS', number: '860', name: 'Uzbekistan Sum', symbol: 'с\u045Eм' },
  VES: { code: 'VES', number: '928', name: 'Bolívar Soberano', symbol: 'Bs. S.' },
  VND: { code: 'VND', number: '704', name: 'Dong', symbol: '\u20AB' },
  VUV: { code: 'VUV', number: '548', name: 'Vatu', symbol: 'Vt' },
  WST: { code: 'WST', number: '882', name: 'Tala', symbol: '$' },
  XAF: { code: 'XAF', number: '950', name: 'CFA Franc BEAC', symbol: '\u20A3' },
  XCD: { code: 'XCD', number: '951', name: 'East Caribbean Dollar', symbol: '$' },
  XOF: { code: 'XOF', number: '952', name: 'CFA Franc BCEAO', symbol: '\u20A3' },
  XPF: { code: 'XPF', number: '953', name: 'CFP Franc', symbol: '\u20A3' },
  YER: { code: 'YER', number: '886', name: 'Yemeni Rial', symbol: 'YR' },
  ZAR: { code: 'ZAR', number: '710', name: 'Rand', symbol: 'R' },
  ZMW: { code: 'ZMW', number: '967', name: 'Zambian Kwacha', symbol: 'K' },
  ZWL: { code: 'ZWL', number: '932', name: 'Zimbabwe Dollar', symbol: 'Z$' },
}

export const CURRENCY_CODES = Object.keys(CURRENCIES).reduce((memo, curr) => ({
  ...memo,
  [curr.toLowerCase()]: curr,
}), {})

export const CURRENCY_SIGN_TYPE = {
  code: 'code',
  name: 'name',
  symbol: 'symbol',
}

// React Intl want static defaultMessage
export const localization = {
  code: defineMessages({
    AED: { id: 'components.TCurrency.code.AED', defaultMessage: 'AED' },
    AFN: { id: 'components.TCurrency.code.AFN', defaultMessage: 'AFN' },
    ALL: { id: 'components.TCurrency.code.ALL', defaultMessage: 'ALL' },
    AMD: { id: 'components.TCurrency.code.AMD', defaultMessage: 'AMD' },
    ANG: { id: 'components.TCurrency.code.ANG', defaultMessage: 'ANG' },
    AOA: { id: 'components.TCurrency.code.AOA', defaultMessage: 'AOA' },
    ARS: { id: 'components.TCurrency.code.ARS', defaultMessage: 'ARS' },
    AUD: { id: 'components.TCurrency.code.AUD', defaultMessage: 'AUD' },
    AWG: { id: 'components.TCurrency.code.AWG', defaultMessage: 'AWG' },
    AZN: { id: 'components.TCurrency.code.AZN', defaultMessage: 'AZN' },
    BAM: { id: 'components.TCurrency.code.BAM', defaultMessage: 'BAM' },
    BBD: { id: 'components.TCurrency.code.BBD', defaultMessage: 'BBD' },
    BDT: { id: 'components.TCurrency.code.BDT', defaultMessage: 'BDT' },
    BGN: { id: 'components.TCurrency.code.BGN', defaultMessage: 'BGN' },
    BHD: { id: 'components.TCurrency.code.BHD', defaultMessage: 'BHD' },
    BIF: { id: 'components.TCurrency.code.BIF', defaultMessage: 'BIF' },
    BMD: { id: 'components.TCurrency.code.BMD', defaultMessage: 'BMD' },
    BND: { id: 'components.TCurrency.code.BND', defaultMessage: 'BND' },
    BOB: { id: 'components.TCurrency.code.BOB', defaultMessage: 'BOB' },
    BRL: { id: 'components.TCurrency.code.BRL', defaultMessage: 'BRL' },
    BSD: { id: 'components.TCurrency.code.BSD', defaultMessage: 'BSD' },
    BTN: { id: 'components.TCurrency.code.BTN', defaultMessage: 'BTN' },
    BWP: { id: 'components.TCurrency.code.BWP', defaultMessage: 'BWP' },
    BYN: { id: 'components.TCurrency.code.BYN', defaultMessage: 'BYN' },
    BZD: { id: 'components.TCurrency.code.BZD', defaultMessage: 'BZD' },
    CAD: { id: 'components.TCurrency.code.CAD', defaultMessage: 'CAD' },
    CDF: { id: 'components.TCurrency.code.CDF', defaultMessage: 'CDF' },
    CHF: { id: 'components.TCurrency.code.CHF', defaultMessage: 'CHF' },
    CLP: { id: 'components.TCurrency.code.CLP', defaultMessage: 'CLP' },
    CNY: { id: 'components.TCurrency.code.CNY', defaultMessage: 'CNY' },
    COP: { id: 'components.TCurrency.code.COP', defaultMessage: 'COP' },
    CRC: { id: 'components.TCurrency.code.CRC', defaultMessage: 'CRC' },
    CUP: { id: 'components.TCurrency.code.CUP', defaultMessage: 'CUP' },
    CVE: { id: 'components.TCurrency.code.CVE', defaultMessage: 'CVE' },
    CZK: { id: 'components.TCurrency.code.CZK', defaultMessage: 'CZK' },
    DJF: { id: 'components.TCurrency.code.DJF', defaultMessage: 'DJF' },
    DKK: { id: 'components.TCurrency.code.DKK', defaultMessage: 'DKK' },
    DOP: { id: 'components.TCurrency.code.DOP', defaultMessage: 'DOP' },
    DZD: { id: 'components.TCurrency.code.DZD', defaultMessage: 'DZD' },
    EGP: { id: 'components.TCurrency.code.EGP', defaultMessage: 'EGP' },
    ERN: { id: 'components.TCurrency.code.ERN', defaultMessage: 'ERN' },
    ETB: { id: 'components.TCurrency.code.ETB', defaultMessage: 'ETB' },
    EUR: { id: 'components.TCurrency.code.EUR', defaultMessage: 'EUR' },
    FJD: { id: 'components.TCurrency.code.FJD', defaultMessage: 'FJD' },
    FKP: { id: 'components.TCurrency.code.FKP', defaultMessage: 'FKP' },
    GBP: { id: 'components.TCurrency.code.GBP', defaultMessage: 'GBP' },
    GEL: { id: 'components.TCurrency.code.GEL', defaultMessage: 'GEL' },
    GHS: { id: 'components.TCurrency.code.GHS', defaultMessage: 'GHS' },
    GIP: { id: 'components.TCurrency.code.GIP', defaultMessage: 'GIP' },
    GMD: { id: 'components.TCurrency.code.GMD', defaultMessage: 'GMD' },
    GNF: { id: 'components.TCurrency.code.GNF', defaultMessage: 'GNF' },
    GTQ: { id: 'components.TCurrency.code.GTQ', defaultMessage: 'GTQ' },
    GYD: { id: 'components.TCurrency.code.GYD', defaultMessage: 'GYD' },
    HKD: { id: 'components.TCurrency.code.HKD', defaultMessage: 'HKD' },
    HNL: { id: 'components.TCurrency.code.HNL', defaultMessage: 'HNL' },
    HRK: { id: 'components.TCurrency.code.HRK', defaultMessage: 'HRK' },
    HTG: { id: 'components.TCurrency.code.HTG', defaultMessage: 'HTG' },
    HUF: { id: 'components.TCurrency.code.HUF', defaultMessage: 'HUF' },
    IDR: { id: 'components.TCurrency.code.IDR', defaultMessage: 'IDR' },
    ILS: { id: 'components.TCurrency.code.ILS', defaultMessage: 'ILS' },
    INR: { id: 'components.TCurrency.code.INR', defaultMessage: 'INR' },
    IQD: { id: 'components.TCurrency.code.IQD', defaultMessage: 'IQD' },
    IRR: { id: 'components.TCurrency.code.IRR', defaultMessage: 'IRR' },
    ISK: { id: 'components.TCurrency.code.ISK', defaultMessage: 'ISK' },
    JMD: { id: 'components.TCurrency.code.JMD', defaultMessage: 'JMD' },
    JOD: { id: 'components.TCurrency.code.JOD', defaultMessage: 'JOD' },
    JPY: { id: 'components.TCurrency.code.JPY', defaultMessage: 'JPY' },
    KES: { id: 'components.TCurrency.code.KES', defaultMessage: 'KES' },
    KGS: { id: 'components.TCurrency.code.KGS', defaultMessage: 'KGS' },
    KHR: { id: 'components.TCurrency.code.KHR', defaultMessage: 'KHR' },
    KMF: { id: 'components.TCurrency.code.KMF', defaultMessage: 'KMF' },
    KPW: { id: 'components.TCurrency.code.KPW', defaultMessage: 'KPW' },
    KRW: { id: 'components.TCurrency.code.KRW', defaultMessage: 'KRW' },
    KWD: { id: 'components.TCurrency.code.KWD', defaultMessage: 'KWD' },
    KYD: { id: 'components.TCurrency.code.KYD', defaultMessage: 'KYD' },
    KZT: { id: 'components.TCurrency.code.KZT', defaultMessage: 'KZT' },
    LAK: { id: 'components.TCurrency.code.LAK', defaultMessage: 'LAK' },
    LBP: { id: 'components.TCurrency.code.LBP', defaultMessage: 'LBP' },
    LKR: { id: 'components.TCurrency.code.LKR', defaultMessage: 'LKR' },
    LRD: { id: 'components.TCurrency.code.LRD', defaultMessage: 'LRD' },
    LSL: { id: 'components.TCurrency.code.LSL', defaultMessage: 'LSL' },
    LYD: { id: 'components.TCurrency.code.LYD', defaultMessage: 'LYD' },
    MAD: { id: 'components.TCurrency.code.MAD', defaultMessage: 'MAD' },
    MDL: { id: 'components.TCurrency.code.MDL', defaultMessage: 'MDL' },
    MGA: { id: 'components.TCurrency.code.MGA', defaultMessage: 'MGA' },
    MKD: { id: 'components.TCurrency.code.MKD', defaultMessage: 'MKD' },
    MMK: { id: 'components.TCurrency.code.MMK', defaultMessage: 'MMK' },
    MNT: { id: 'components.TCurrency.code.MNT', defaultMessage: 'MNT' },
    MOP: { id: 'components.TCurrency.code.MOP', defaultMessage: 'MOP' },
    MRU: { id: 'components.TCurrency.code.MRU', defaultMessage: 'MRU' },
    MUR: { id: 'components.TCurrency.code.MUR', defaultMessage: 'MUR' },
    MVR: { id: 'components.TCurrency.code.MVR', defaultMessage: 'MVR' },
    MWK: { id: 'components.TCurrency.code.MWK', defaultMessage: 'MWK' },
    MXN: { id: 'components.TCurrency.code.MXN', defaultMessage: 'MXN' },
    MYR: { id: 'components.TCurrency.code.MYR', defaultMessage: 'MYR' },
    MZN: { id: 'components.TCurrency.code.MZN', defaultMessage: 'MZN' },
    NAD: { id: 'components.TCurrency.code.NAD', defaultMessage: 'NAD' },
    NGN: { id: 'components.TCurrency.code.NGN', defaultMessage: 'NGN' },
    NIO: { id: 'components.TCurrency.code.NIO', defaultMessage: 'NIO' },
    NOK: { id: 'components.TCurrency.code.NOK', defaultMessage: 'NOK' },
    NPR: { id: 'components.TCurrency.code.NPR', defaultMessage: 'NPR' },
    NZD: { id: 'components.TCurrency.code.NZD', defaultMessage: 'NZD' },
    OMR: { id: 'components.TCurrency.code.OMR', defaultMessage: 'OMR' },
    PAB: { id: 'components.TCurrency.code.PAB', defaultMessage: 'PAB' },
    PEN: { id: 'components.TCurrency.code.PEN', defaultMessage: 'PEN' },
    PGK: { id: 'components.TCurrency.code.PGK', defaultMessage: 'PGK' },
    PHP: { id: 'components.TCurrency.code.PHP', defaultMessage: 'PHP' },
    PKR: { id: 'components.TCurrency.code.PKR', defaultMessage: 'PKR' },
    PLN: { id: 'components.TCurrency.code.PLN', defaultMessage: 'PLN' },
    PYG: { id: 'components.TCurrency.code.PYG', defaultMessage: 'PYG' },
    QAR: { id: 'components.TCurrency.code.QAR', defaultMessage: 'QAR' },
    RON: { id: 'components.TCurrency.code.RON', defaultMessage: 'RON' },
    RSD: { id: 'components.TCurrency.code.RSD', defaultMessage: 'RSD' },
    RUB: { id: 'components.TCurrency.code.RUB', defaultMessage: 'RUB' },
    RWF: { id: 'components.TCurrency.code.RWF', defaultMessage: 'RWF' },
    SAR: { id: 'components.TCurrency.code.SAR', defaultMessage: 'SAR' },
    SBD: { id: 'components.TCurrency.code.SBD', defaultMessage: 'SBD' },
    SCR: { id: 'components.TCurrency.code.SCR', defaultMessage: 'SCR' },
    SDG: { id: 'components.TCurrency.code.SDG', defaultMessage: 'SDG' },
    SEK: { id: 'components.TCurrency.code.SEK', defaultMessage: 'SEK' },
    SGD: { id: 'components.TCurrency.code.SGD', defaultMessage: 'SGD' },
    SHP: { id: 'components.TCurrency.code.SHP', defaultMessage: 'SHP' },
    SLL: { id: 'components.TCurrency.code.SLL', defaultMessage: 'SLL' },
    SOS: { id: 'components.TCurrency.code.SOS', defaultMessage: 'SOS' },
    SRD: { id: 'components.TCurrency.code.SRD', defaultMessage: 'SRD' },
    SSP: { id: 'components.TCurrency.code.SSP', defaultMessage: 'SSP' },
    STN: { id: 'components.TCurrency.code.STN', defaultMessage: 'STN' },
    SVC: { id: 'components.TCurrency.code.SVC', defaultMessage: 'SVC' },
    SYP: { id: 'components.TCurrency.code.SYP', defaultMessage: 'SYP' },
    SZL: { id: 'components.TCurrency.code.SZL', defaultMessage: 'SZL' },
    THB: { id: 'components.TCurrency.code.THB', defaultMessage: 'THB' },
    TJS: { id: 'components.TCurrency.code.TJS', defaultMessage: 'TJS' },
    TMT: { id: 'components.TCurrency.code.TMT', defaultMessage: 'TMT' },
    TND: { id: 'components.TCurrency.code.TND', defaultMessage: 'TND' },
    TOP: { id: 'components.TCurrency.code.TOP', defaultMessage: 'TOP' },
    TRY: { id: 'components.TCurrency.code.TRY', defaultMessage: 'TRY' },
    TTD: { id: 'components.TCurrency.code.TTD', defaultMessage: 'TTD' },
    TWD: { id: 'components.TCurrency.code.TWD', defaultMessage: 'TWD' },
    TZS: { id: 'components.TCurrency.code.TZS', defaultMessage: 'TZS' },
    UAH: { id: 'components.TCurrency.code.UAH', defaultMessage: 'UAH' },
    UGX: { id: 'components.TCurrency.code.UGX', defaultMessage: 'UGX' },
    USD: { id: 'components.TCurrency.code.USD', defaultMessage: 'USD' },
    UYU: { id: 'components.TCurrency.code.UYU', defaultMessage: 'UYU' },
    UZS: { id: 'components.TCurrency.code.UZS', defaultMessage: 'UZS' },
    VES: { id: 'components.TCurrency.code.VES', defaultMessage: 'VES' },
    VND: { id: 'components.TCurrency.code.VND', defaultMessage: 'VND' },
    VUV: { id: 'components.TCurrency.code.VUV', defaultMessage: 'VUV' },
    WST: { id: 'components.TCurrency.code.WST', defaultMessage: 'WST' },
    XAF: { id: 'components.TCurrency.code.XAF', defaultMessage: 'XAF' },
    XCD: { id: 'components.TCurrency.code.XCD', defaultMessage: 'XCD' },
    XOF: { id: 'components.TCurrency.code.XOF', defaultMessage: 'XOF' },
    XPF: { id: 'components.TCurrency.code.XPF', defaultMessage: 'XPF' },
    YER: { id: 'components.TCurrency.code.YER', defaultMessage: 'YER' },
    ZAR: { id: 'components.TCurrency.code.ZAR', defaultMessage: 'ZAR' },
    ZMW: { id: 'components.TCurrency.code.ZMW', defaultMessage: 'ZMW' },
    ZWL: { id: 'components.TCurrency.code.ZWL', defaultMessage: 'ZWL' },
  }),
  name: defineMessages({
    AED: { id: 'components.TCurrency.name.uaeDirham', defaultMessage: 'UAE Dirham' },
    AFN: { id: 'components.TCurrency.name.afghani', defaultMessage: 'Afghani' },
    ALL: { id: 'components.TCurrency.name.lek', defaultMessage: 'Lek' },
    AMD: { id: 'components.TCurrency.name.armenianDram', defaultMessage: 'Armenian Dram' },
    ANG: {
      id: 'components.TCurrency.name.netherlandsAntilleanGuilder',
      defaultMessage: 'Netherlands Antillean Guilder',
    },
    AOA: { id: 'components.TCurrency.name.kwanza', defaultMessage: 'Kwanza' },
    ARS: { id: 'components.TCurrency.name.argentinePeso', defaultMessage: 'Argentine Peso' },
    AUD: { id: 'components.TCurrency.name.australianDollar', defaultMessage: 'Australian Dollar' },
    AWG: { id: 'components.TCurrency.name.arubanGuilder', defaultMessage: 'Aruban Guilder' },
    AZN: { id: 'components.TCurrency.name.azerbaijanianManat', defaultMessage: 'Azerbaijanian Manat' },
    BAM: { id: 'components.TCurrency.name.convertibleMark', defaultMessage: 'Convertible Mark' },
    BBD: { id: 'components.TCurrency.name.barbadosDollar', defaultMessage: 'Barbados Dollar' },
    BDT: { id: 'components.TCurrency.name.taka', defaultMessage: 'Taka' },
    BGN: { id: 'components.TCurrency.name.bulgarianLev', defaultMessage: 'Bulgarian Lev' },
    BHD: { id: 'components.TCurrency.name.bahrainiDinar', defaultMessage: 'Bahraini Dinar' },
    BIF: { id: 'components.TCurrency.name.burundiFranc', defaultMessage: 'Burundi Franc' },
    BMD: { id: 'components.TCurrency.name.bermudianDollar', defaultMessage: 'Bermudian Dollar' },
    BND: { id: 'components.TCurrency.name.bruneiDollar', defaultMessage: 'Brunei Dollar' },
    BOB: { id: 'components.TCurrency.name.boliviano', defaultMessage: 'Boliviano' },
    BRL: { id: 'components.TCurrency.name.brazilianReal', defaultMessage: 'Brazilian Real' },
    BSD: { id: 'components.TCurrency.name.bahamianDollar', defaultMessage: 'Bahamian Dollar' },
    BTN: { id: 'components.TCurrency.name.ngultrum', defaultMessage: 'Ngultrum' },
    BWP: { id: 'components.TCurrency.name.pula', defaultMessage: 'Pula' },
    BYN: { id: 'components.TCurrency.name.belarussianRuble', defaultMessage: 'Belarussian Ruble' },
    BZD: { id: 'components.TCurrency.name.belizeDollar', defaultMessage: 'Belize Dollar' },
    CAD: { id: 'components.TCurrency.name.canadianDollar', defaultMessage: 'Canadian Dollar' },
    CDF: { id: 'components.TCurrency.name.congoleseFranc', defaultMessage: 'Congolese Franc' },
    CHF: { id: 'components.TCurrency.name.swissFranc', defaultMessage: 'Swiss Franc' },
    CLP: { id: 'components.TCurrency.name.chileanPeso', defaultMessage: 'Chilean Peso' },
    CNY: { id: 'components.TCurrency.name.yuanRenminbi', defaultMessage: 'Yuan Renminbi' },
    COP: { id: 'components.TCurrency.name.colombianPeso', defaultMessage: 'Colombian Peso' },
    CRC: { id: 'components.TCurrency.name.costaRicanColon', defaultMessage: 'Costa Rican Colon' },
    CUP: { id: 'components.TCurrency.name.cubanPeso', defaultMessage: 'Cuban Peso' },
    CVE: { id: 'components.TCurrency.name.capeVerdeEscudo', defaultMessage: 'Cape Verde Escudo' },
    CZK: { id: 'components.TCurrency.name.czechKoruna', defaultMessage: 'Czech Koruna' },
    DJF: { id: 'components.TCurrency.name.djiboutiFranc', defaultMessage: 'Djibouti Franc' },
    DKK: { id: 'components.TCurrency.name.danishKrone', defaultMessage: 'Danish Krone' },
    DOP: { id: 'components.TCurrency.name.dominicanPeso', defaultMessage: 'Dominican Peso' },
    DZD: { id: 'components.TCurrency.name.algerianDinar', defaultMessage: 'Algerian Dinar' },
    EGP: { id: 'components.TCurrency.name.egyptianPound', defaultMessage: 'Egyptian Pound' },
    ERN: { id: 'components.TCurrency.name.nakfa', defaultMessage: 'Nakfa' },
    ETB: { id: 'components.TCurrency.name.ethiopianBirr', defaultMessage: 'Ethiopian Birr' },
    EUR: { id: 'components.TCurrency.name.euro', defaultMessage: 'Euro' },
    FJD: { id: 'components.TCurrency.name.fijiDollar', defaultMessage: 'Fiji Dollar' },
    FKP: { id: 'components.TCurrency.name.falklandIslandsPound', defaultMessage: 'Falkland Islands Pound' },
    GBP: { id: 'components.TCurrency.name.poundSterling', defaultMessage: 'Pound Sterling' },
    GEL: { id: 'components.TCurrency.name.lari', defaultMessage: 'Lari' },
    GHS: { id: 'components.TCurrency.name.ghanaCedi', defaultMessage: 'Ghana Cedi' },
    GIP: { id: 'components.TCurrency.name.gibraltarPound', defaultMessage: 'Gibraltar Pound' },
    GMD: { id: 'components.TCurrency.name.dalasi', defaultMessage: 'Dalasi' },
    GNF: { id: 'components.TCurrency.name.guineaFranc', defaultMessage: 'Guinea Franc' },
    GTQ: { id: 'components.TCurrency.name.quetzal', defaultMessage: 'Quetzal' },
    GYD: { id: 'components.TCurrency.name.guyanaDollar', defaultMessage: 'Guyana Dollar' },
    HKD: { id: 'components.TCurrency.name.hongKongDollar', defaultMessage: 'Hong Kong Dollar' },
    HNL: { id: 'components.TCurrency.name.lempira', defaultMessage: 'Lempira' },
    HRK: { id: 'components.TCurrency.name.kuna', defaultMessage: 'Kuna' },
    HTG: { id: 'components.TCurrency.name.gourde', defaultMessage: 'Gourde' },
    HUF: { id: 'components.TCurrency.name.forint', defaultMessage: 'Forint' },
    IDR: { id: 'components.TCurrency.name.rupiah', defaultMessage: 'Rupiah' },
    ILS: { id: 'components.TCurrency.name.newIsraeliSheqel', defaultMessage: 'New Israeli Sheqel' },
    INR: { id: 'components.TCurrency.name.indianRupee', defaultMessage: 'Indian Rupee' },
    IQD: { id: 'components.TCurrency.name.iraqiDinar', defaultMessage: 'Iraqi Dinar' },
    IRR: { id: 'components.TCurrency.name.iranianRial', defaultMessage: 'Iranian Rial' },
    ISK: { id: 'components.TCurrency.name.icelandKrona', defaultMessage: 'Iceland Krona' },
    JMD: { id: 'components.TCurrency.name.jamaicanDollar', defaultMessage: 'Jamaican Dollar' },
    JOD: { id: 'components.TCurrency.name.jordanianDinar', defaultMessage: 'Jordanian Dinar' },
    JPY: { id: 'components.TCurrency.name.yen', defaultMessage: 'Yen' },
    KES: { id: 'components.TCurrency.name.kenyanShilling', defaultMessage: 'Kenyan Shilling' },
    KGS: { id: 'components.TCurrency.name.som', defaultMessage: 'Som' },
    KHR: { id: 'components.TCurrency.name.riel', defaultMessage: 'Riel' },
    KMF: { id: 'components.TCurrency.name.comoroFranc', defaultMessage: 'Comoro Franc' },
    KPW: { id: 'components.TCurrency.name.northKoreanWon', defaultMessage: 'North Korean Won' },
    KRW: { id: 'components.TCurrency.name.southKoreanWon', defaultMessage: 'South Korean Won' },
    KWD: { id: 'components.TCurrency.name.kuwaitiDinar', defaultMessage: 'Kuwaiti Dinar' },
    KYD: { id: 'components.TCurrency.name.caymanIslandsDollar', defaultMessage: 'Cayman Islands Dollar' },
    KZT: { id: 'components.TCurrency.name.tenge', defaultMessage: 'Tenge' },
    LAK: { id: 'components.TCurrency.name.kip', defaultMessage: 'Kip' },
    LBP: { id: 'components.TCurrency.name.lebanesePound', defaultMessage: 'Lebanese Pound' },
    LKR: { id: 'components.TCurrency.name.sriLankaRupee', defaultMessage: 'Sri Lanka Rupee' },
    LRD: { id: 'components.TCurrency.name.liberianDollar', defaultMessage: 'Liberian Dollar' },
    LSL: { id: 'components.TCurrency.name.loti', defaultMessage: 'Loti' },
    LYD: { id: 'components.TCurrency.name.libyanDinar', defaultMessage: 'Libyan Dinar' },
    MAD: { id: 'components.TCurrency.name.moroccanDirham', defaultMessage: 'Moroccan Dirham' },
    MDL: { id: 'components.TCurrency.name.moldovanLeu', defaultMessage: 'Moldovan Leu' },
    MGA: { id: 'components.TCurrency.name.malagasyAriary', defaultMessage: 'Malagasy Ariary' },
    MKD: { id: 'components.TCurrency.name.denar', defaultMessage: 'Denar' },
    MMK: { id: 'components.TCurrency.name.kyat', defaultMessage: 'Kyat' },
    MNT: { id: 'components.TCurrency.name.tugrik', defaultMessage: 'Tugrik' },
    MOP: { id: 'components.TCurrency.name.pataca', defaultMessage: 'Pataca' },
    MRU: { id: 'components.TCurrency.name.ouguiya', defaultMessage: 'Ouguiya' },
    MUR: { id: 'components.TCurrency.name.mauritiusRupee', defaultMessage: 'Mauritius Rupee' },
    MVR: { id: 'components.TCurrency.name.rufiyaa', defaultMessage: 'Rufiyaa' },
    MWK: { id: 'components.TCurrency.name.kwacha', defaultMessage: 'Kwacha' },
    MXN: { id: 'components.TCurrency.name.mexicanPeso', defaultMessage: 'Mexican Peso' },
    MYR: { id: 'components.TCurrency.name.malaysianRinggit', defaultMessage: 'Malaysian Ringgit' },
    MZN: { id: 'components.TCurrency.name.mozambiqueMetical', defaultMessage: 'Mozambique Metical' },
    NAD: { id: 'components.TCurrency.name.namibiaDollar', defaultMessage: 'Namibia Dollar' },
    NGN: { id: 'components.TCurrency.name.naira', defaultMessage: 'Naira' },
    NIO: { id: 'components.TCurrency.name.cordobaOro', defaultMessage: 'Cordoba Oro' },
    NOK: { id: 'components.TCurrency.name.norwegianKrone', defaultMessage: 'Norwegian Krone' },
    NPR: { id: 'components.TCurrency.name.nepaleseRupee', defaultMessage: 'Nepalese Rupee' },
    NZD: { id: 'components.TCurrency.name.newZealandDollar', defaultMessage: 'New Zealand Dollar' },
    OMR: { id: 'components.TCurrency.name.rialOmani', defaultMessage: 'Rial Omani' },
    PAB: { id: 'components.TCurrency.name.balboa', defaultMessage: 'Balboa' },
    PEN: { id: 'components.TCurrency.name.nuevoSol', defaultMessage: 'Nuevo Sol' },
    PGK: { id: 'components.TCurrency.name.kina', defaultMessage: 'Kina' },
    PHP: { id: 'components.TCurrency.name.philippinePeso', defaultMessage: 'Philippine Peso' },
    PKR: { id: 'components.TCurrency.name.pakistanRupee', defaultMessage: 'Pakistan Rupee' },
    PLN: { id: 'components.TCurrency.name.zloty', defaultMessage: 'Zloty' },
    PYG: { id: 'components.TCurrency.name.guarani', defaultMessage: 'Guarani' },
    QAR: { id: 'components.TCurrency.name.qatariRial', defaultMessage: 'Qatari Rial' },
    RON: { id: 'components.TCurrency.name.romanianLeu', defaultMessage: 'Romanian Leu' },
    RSD: { id: 'components.TCurrency.name.serbianDinar', defaultMessage: 'Serbian Dinar' },
    RUB: { id: 'components.TCurrency.name.russianRuble', defaultMessage: 'Russian Ruble' },
    RWF: { id: 'components.TCurrency.name.rwandaFranc', defaultMessage: 'Rwanda Franc' },
    SAR: { id: 'components.TCurrency.name.saudiRiyal', defaultMessage: 'Saudi Riyal' },
    SBD: { id: 'components.TCurrency.name.solomonIslandsDollar', defaultMessage: 'Solomon Islands Dollar' },
    SCR: { id: 'components.TCurrency.name.seychellesRupee', defaultMessage: 'Seychelles Rupee' },
    SDG: { id: 'components.TCurrency.name.sudanesePound', defaultMessage: 'Sudanese Pound' },
    SEK: { id: 'components.TCurrency.name.swedishKrona', defaultMessage: 'Swedish Krona' },
    SGD: { id: 'components.TCurrency.name.singaporeDollar', defaultMessage: 'Singapore Dollar' },
    SHP: { id: 'components.TCurrency.name.saintHelenaPound', defaultMessage: 'Saint Helena Pound' },
    SLL: { id: 'components.TCurrency.name.leone', defaultMessage: 'Leone' },
    SOS: { id: 'components.TCurrency.name.somaliShilling', defaultMessage: 'Somali Shilling' },
    SRD: { id: 'components.TCurrency.name.surinamDollar', defaultMessage: 'Surinam Dollar' },
    SSP: { id: 'components.TCurrency.name.southSudanesePound', defaultMessage: 'South Sudanese Pound' },
    STN: { id: 'components.TCurrency.name.dobra', defaultMessage: 'Dobra' },
    SVC: { id: 'components.TCurrency.name.elSalvadorColon', defaultMessage: 'El Salvador Colon' },
    SYP: { id: 'components.TCurrency.name.syrianPound', defaultMessage: 'Syrian Pound' },
    SZL: { id: 'components.TCurrency.name.lilangeni', defaultMessage: 'Lilangeni' },
    THB: { id: 'components.TCurrency.name.baht', defaultMessage: 'Baht' },
    TJS: { id: 'components.TCurrency.name.somoni', defaultMessage: 'Somoni' },
    TMT: { id: 'components.TCurrency.name.turkmenistanNewManat', defaultMessage: 'Turkmenistan New Manat' },
    TND: { id: 'components.TCurrency.name.tunisianDinar', defaultMessage: 'Tunisian Dinar' },
    TOP: { id: 'components.TCurrency.name.pa’anga', defaultMessage: 'Pa’anga' },
    TRY: { id: 'components.TCurrency.name.turkishLira', defaultMessage: 'Turkish Lira' },
    TTD: {
      id: 'components.TCurrency.name.trinidadAndTobagoDollar',
      defaultMessage: 'Trinidad and Tobago Dollar',
    },
    TWD: { id: 'components.TCurrency.name.newTaiwanDollar', defaultMessage: 'New Taiwan Dollar' },
    TZS: { id: 'components.TCurrency.name.tanzanianShilling', defaultMessage: 'Tanzanian Shilling' },
    UAH: { id: 'components.TCurrency.name.hryvnia', defaultMessage: 'Hryvnia' },
    UGX: { id: 'components.TCurrency.name.ugandaShilling', defaultMessage: 'Uganda Shilling' },
    USD: { id: 'components.TCurrency.name.usDollar', defaultMessage: 'US Dollar' },
    UYU: { id: 'components.TCurrency.name.pesoUruguayo', defaultMessage: 'Peso Uruguayo' },
    UZS: { id: 'components.TCurrency.name.uzbekistanSum', defaultMessage: 'Uzbekistan Sum' },
    VES: { id: 'components.TCurrency.name.bolívarSoberano', defaultMessage: 'Bolívar Soberano' },
    VND: { id: 'components.TCurrency.name.dong', defaultMessage: 'Dong' },
    VUV: { id: 'components.TCurrency.name.vatu', defaultMessage: 'Vatu' },
    WST: { id: 'components.TCurrency.name.tala', defaultMessage: 'Tala' },
    XAF: { id: 'components.TCurrency.name.cfaFrancBeac', defaultMessage: 'CFA Franc BEAC' },
    XCD: { id: 'components.TCurrency.name.eastCaribbeanDollar', defaultMessage: 'East Caribbean Dollar' },
    XOF: { id: 'components.TCurrency.name.cfaFrancBceao', defaultMessage: 'CFA Franc BCEAO' },
    XPF: { id: 'components.TCurrency.name.cfpFranc', defaultMessage: 'CFP Franc' },
    YER: { id: 'components.TCurrency.name.yemeniRial', defaultMessage: 'Yemeni Rial' },
    ZAR: { id: 'components.TCurrency.name.rand', defaultMessage: 'Rand' },
    ZMW: { id: 'components.TCurrency.name.zambianKwacha', defaultMessage: 'Zambian Kwacha' },
    ZWL: { id: 'components.TCurrency.name.zimbabweDollar', defaultMessage: 'Zimbabwe Dollar' },
  }),
}
