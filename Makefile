.PHONY: init mise/up mise/trust

init:
	@more Makefile

mise/trust:
	mise trust

mise/up:
	mise up

up: mise/up
	docker compose up
