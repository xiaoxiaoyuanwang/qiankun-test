import defaultSettings from '../../config/defaultSettings';

const updateColorWeak = (colorWeak) => {
  const antdchildv4 = document.getElementById('antdchildv4');

  if (antdchildv4) {
    antdchildv4.className = colorWeak ? 'colorWeak' : '';
  }
};

const SettingModel = {
  namespace: 'settings',
  state: defaultSettings,
  reducers: {
    changeSetting(state = defaultSettings, { payload }) {
      const { colorWeak, contentWidth } = payload;

      if (state.contentWidth !== contentWidth && window.dispatchEvent) {
        window.dispatchEvent(new Event('resize'));
      }

      updateColorWeak(!!colorWeak);
      return { ...state, ...payload };
    },
  },
};
export default SettingModel;
