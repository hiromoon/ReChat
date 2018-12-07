defmodule RechatWeb.PageController do
  use RechatWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
