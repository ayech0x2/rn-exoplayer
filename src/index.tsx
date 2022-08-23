import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'rn-exoplayer' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type RnExoplayerProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RnExoplayerView';

export const RnExoplayerView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RnExoplayerProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
