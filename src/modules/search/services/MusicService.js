import ApiConnector from "../../helpers/ApiConnector";

const FetchSongsByCriteria = async (criteria = "Daddy yankee") => {
    const results = await ApiConnector.get(`/search?q=${criteria}&type=track`, {
        headers: {
            "Authorization": "Bearer BQCrpbEQWuiSHcxe7nSA9Vgx-GkN4JprqLMGASIM-hcIz_RLGPkZt-tKPLqVMzMZd6nYpSif2g0JfpAkgG8YLDsQQsYJTN76c_JZMv3c38MrmO4hyj-kTSihgo-VHwV69zAjD9mn5c_dydHExtsXrjBim-Ry5cChJIoMRqi-bQx1MikfBsM",
            "Content-Type": "application/json"
        }
    });

    const { items } = results.data.tracks;
    console.log(items);
    return items;
}

export const MusicService = {
    FetchSongsByCriteria
};