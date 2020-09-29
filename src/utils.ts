export function getAssetPath() {
    if (process.env.REACT_APP_ASSET_PATH === 'build') {
        return '../../../assets';
    } else {
        return '../../assets';
    }
}
