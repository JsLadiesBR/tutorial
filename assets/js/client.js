
const currentPlayers = (self, players) => {
    players.map(player => {
        if (player.playerId == self.socket.id) {
            addPlayer(self, player)
        } else {
            addOtherPlayers(self, player)
        }
    })
}

const disconnect = (self, playerId) => {
    self.otherPlayers.getChildren().map(player => {
        console.log(player)
        if (player.playerId == playerId) {
            player.destroy()
        }
    })
}

const addPlayer = (self, player) => {
    self.hamtaro = self.physics.add.sprite(player.x, player.y, 'hamtaro_atlas')
    self.hamtaro.setTint(0x0000ff)
}

const addOtherPlayers = (self, player) => {
    const otherPlayer = self.physics.add.sprite(player.x, player.y, 'hamtaro_atlas')
    otherPlayer.playerId = player.playerId
    self.otherPlayers.add(otherPlayer)
}

const playerMoved = (self, player) => {
    self.otherPlayers.getChildren().map(otherPlayer => {
        if (otherPlayer.playerId === player.playerId) {
            otherPlayer.setPosition(player.x, player.y)
        }
    })
}
