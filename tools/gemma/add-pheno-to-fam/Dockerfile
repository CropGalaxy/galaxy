# Use an official R base image
FROM rocker/r-ver:4.1.0

# Set the working directory
WORKDIR /usr/local/bin

# Copy the R script into the container
COPY add-pheno-to-fam.R .

# Install any required R packages
RUN R -e "install.packages(c('data.table', 'dplyr'), repos='http://cran.rstudio.com/', dependencies=TRUE)"

# Set the entrypoint to run the R script
ENTRYPOINT ["Rscript", "add-pheno-to-fam.R"]
