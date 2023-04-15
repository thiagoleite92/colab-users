export default class FavoriteService {
  toggleFavorito(user) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    const favPosition = favoritos.findIndex(
      (fav) => fav?.id?.value === user?.id?.value
    );

    if (favPosition >= 0) {
      favoritos.splice(favPosition, 1);
    } else {
      favoritos.push(user);
    }

    return localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  favoritos() {
    return JSON.parse(localStorage.getItem("favoritos")) ?? [];
  }
}
