defmodule Rechat.Repo do
  use Ecto.Repo,
    otp_app: :rechat,
    adapter: Ecto.Adapters.MySQL
end
