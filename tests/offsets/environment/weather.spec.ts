import { weather as offsets } from '@offsets/environment/weather';
import { replaceOffsetExpressionValue } from '@convert/apply-conversion';

describe('offset - environment/weather', () => {
  const offsetsTestCases = [
    { name: 'metarStationAltitude', value: 123, expectedResult: 403.54 },
    { name: 'metarBarometricDrift', value: 32, expectedResult: 2 },
    { name: 'metarVisibility', value: 3200, expectedResult: 32 },
    { name: 'metarCloudThunderBase', value: 914, expectedResult: 2998.69 },
    { name: 'metarCloudBaseLow', value: 914, expectedResult: 2998.69 },
    { name: 'metarCloudBaseHigh', value: 914, expectedResult: 2998.69 },
    { name: 'dewPoint', value: 512, expectedResult: 2 },
    { name: 'surfaceWindDirection', value: 32768, expectedResult: 180 },
    { name: 'unlimitedVisibility', value: 3200, expectedResult: 2 },
    { name: 'visibility', value: 3156, expectedResult: 31.56 },
    { name: 'OAT', value: 512, expectedResult: 2 },
    { name: 'interpolatedDewPoint', value: 512, expectedResult: 2 },
    { name: 'windDirection', value: 32768, expectedResult: 180 },
    { name: 'windDirectionalVariation', value: 32768, expectedResult: 180 },
    { name: 'upperCloudCeiling', value: 914, expectedResult: 2998.69 },
    { name: 'upperCloudBase', value: 914, expectedResult: 2998.69 },
    { name: 'upperCloudCoverage', value: 32768 , expectedResult: 4 },
    { name: 'upperCloudVariation', value: 914, expectedResult: 2998.69 },
    { name: 'lowerCloudCeiling', value: 914, expectedResult: 2998.69 },
    { name: 'lowerCloudBase', value: 914, expectedResult: 2998.69 },
    { name: 'lowerCloudCoverage', value: 32768 , expectedResult: 4 },
    { name: 'lowerCloudVariation', value: 914, expectedResult: 2998.69 },
    { name: 'stormCloudCeiling', value: 914, expectedResult: 2998.69 },
    { name: 'stormCloudBase', value: 914, expectedResult: 2998.69 },
    { name: 'stormCloudCoverage', value: 32768 , expectedResult: 4 },
    { name: 'stormCloudVariation', value: 914, expectedResult: 2998.69 },
    { name: 'upperTemperatureLevel', value: 914, expectedResult: 2998.69 },
    { name: 'upperTemperature', value: 512, expectedResult: 2 },
    { name: 'middleTemperatureLevel', value: 914, expectedResult: 2998.69 },
    { name: 'middleTemperature', value: 512, expectedResult: 2 },
    { name: 'lowerTemperatureLevel', value: 914, expectedResult: 2998.69 },
    { name: 'lowerTemperature', value: 512, expectedResult: 2 },
    { name: 'surfaceTemperatureLevel', value: 914, expectedResult: 2998.69 },
    { name: 'surfaceTemperature', value: 512, expectedResult: 2 },
    { name: 'temperatureDrift', value: 512, expectedResult: 2 },
    { name: 'temperatureDayNightVariation', value: 512, expectedResult: 2 },
    { name: 'pressureQNH', value: 32, expectedResult: 2 },
    { name: 'pressureDrift', value: 32, expectedResult: 2 },
    { name: 'upperWindCeiling', value: 914, expectedResult: 2998.69 },
    { name: 'upperWindBase', value: 914, expectedResult: 2998.69 },
    { name: 'upperWindDirection', value: 32768, expectedResult: 180 },
    { name: 'upperWindGustEnabled', value: 1, expectedResult: true },
    { name: 'upperWindGustEnabled', value: 0, expectedResult: false },
    { name: 'middleWindCeiling', value: 914, expectedResult: 2998.69 },
    { name: 'middleWindBase', value: 914, expectedResult: 2998.69 },
    { name: 'middleWindDirection', value: 32768, expectedResult: 180 },
    { name: 'middleWindGustEnabled', value: 1, expectedResult: true },
    { name: 'middleWindGustEnabled', value: 0, expectedResult: false },
    { name: 'lowerWindCeiling', value: 914, expectedResult: 2998.69 },
    { name: 'lowerWindBase', value: 914, expectedResult: 2998.69 },
    { name: 'lowerWindDirection', value: 32768, expectedResult: 180 },
    { name: 'lowerWindGustEnabled', value: 1, expectedResult: true },
    { name: 'lowerWindGustEnabled', value: 0, expectedResult: false },
    { name: 'surfaceWindCeiling', value: 914, expectedResult: 2998.69 },
    { name: 'surfaceWindGustEnabled', value: 1, expectedResult: true },
    { name: 'surfaceWindGustEnabled', value: 0, expectedResult: false },
    { name: 'upperCloudIcing', value: 1, expectedResult: true },
    { name: 'upperCloudIcing', value: 0, expectedResult: false },
    { name: 'lowerCloudIcing', value: 1, expectedResult: true },
    { name: 'lowerCloudIcing', value: 0, expectedResult: false },
    { name: 'stormCloudIcing', value: 1, expectedResult: true },
    { name: 'stormCloudIcing', value: 0, expectedResult: false },
    { name: 'totalAirTemperature', value: 516, expectedResult: 2 },
  ];

  describe('offsets list', () => {
    it('should have required properties', () => {
      expect(offsets).toMatchSnapshot();
    });
  });

  offsetsTestCases.forEach(testedOffset => {
    describe(testedOffset.name, () => {
      it('should convert data properly', () => {
        const convertExpression = replaceOffsetExpressionValue(offsets[testedOffset.name], testedOffset.value);

        // tslint:disable-next-line:no-eval
        expect(eval(convertExpression)).toEqual(testedOffset.expectedResult);
      });
    });
  });
});
