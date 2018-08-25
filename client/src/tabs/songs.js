import React from 'react'

export const Songs = () => {
    return (
        <div className="songs">
            <div className='playlists'>
                <div id="playlist_1"></div>
                <script type="text/javascript">
                    {VK.Widgets.Playlist('playlist_1', -57680571, 2, '339cede6f55a10e1ba')}
                </script>
                <div id="playlist_2"></div>
                <script type="text/javascript">
                    {VK.Widgets.Playlist('playlist_2', -57680571, 4, '6c2ab66489a6d0b7cf')}
                </script>
                <div id="playlist_3"></div>
                <script type="text/javascript">
                    {VK.Widgets.Playlist('playlist_3', -57680571, 3, '079d31d51b9eff6027')}
                </script>
            </div>
        </div>
    )
};