.PHONY: test makemigration migrate collectstatic lint format createsuperuser
ISORT_ARGS=--trailing-comma --multi-line 3

test:
	@#prospector .
	@pytest . --capture=no --reuse-db --cov --cov-report term-missing
makemigrations:
	@python manage.py makemigrations
migrate:
	@python manage.py migrate
collectstatic:
	@python manage.py collectstatic
lint:
	@blue . --check
	@isort . --check $(ISORT_ARGS)
format:
	@blue .
	@isort . $(ISORT_ARGS)
createsuperuser:
	@python manage.py createsuperuser
